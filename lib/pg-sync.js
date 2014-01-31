var Fiber = global.Fiber || require("fibers");
var pg;
try {
  pg = require("pg").native;
} catch(e) {
  pg = require("pg");
}

function sync(obj, fn) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var result;
    var fiber;
    args.push(function(error, value) {
      result = error || value;
      if (fiber) {
        fiber.run(result);
      } else {
        fiber = true;
      }
    });
    var o = this[obj];
    o[fn].apply(o, args);
    if (!fiber) {
      fiber = Fiber.current;
      Fiber.yield();
    }
    if (result instanceof Error) {
      throw new Error(result.message);
    }
    return result;
  };
}

function Client(string, nopool) {
  this._pooled = !nopool;
  if(this._pooled) {
    var that = this;
    var result;
    var fiber;
    pg.connect(string, function(error, client, done) {
      that._done = done;
      result = error || client;
      if(fiber) {
        fiber.run();
      } else {
        fiber = true;
      }
    });
    if (!fiber) {
      fiber = Fiber.current;
      Fiber.yield();
    }
    if(result instanceof Error) {
      throw new Error(result.message);
    }
    this._client = result;
  } else {
    this._client = new pg.Client(string);
    this._connect();
  }
}

exports.end = function() {
  pg.end();
}

exports.Client = Client;

Client.prototype._connect = sync('_client', 'connect');

var query = sync('_client', 'query');
Client.prototype.query = function(string, args) {
  return query.call(this, string, args instanceof Array ? args : Array.prototype.slice.call(arguments).slice(1));
}

Client.prototype.end = function() {
  this._client.end();
}

Client.prototype.done = function() {
  this._done();
  delete this._client;
}




