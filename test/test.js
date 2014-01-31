var assert = require("assert");
var test = require('test');
var pg = require("../lib/pg-sync");
var client = new pg.Client('postgres://postgres:postgres@localhost/postgres');

exports.testQuery = function() {
  client.query('SELECT NOW() AS "theTime"');
};

if (require.main === module) {
  test.run(exports);
}
