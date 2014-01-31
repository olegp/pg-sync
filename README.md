# PG Sync

PG Sync is a synchronous PostgreSQL driver for use with [Common Node](http://olegp.github.com/common-node/).

Here is a quick usage example that you can use with Common Node:

    var pg = require("pg-sync");
    var client = new pg.Client('postgres://postgres:postgres@localhost/postgres');
    client.query('select now() as "theTime"');
    pg.end();

### Tests

Run the unit tests with the following command:

    common-node test/test.js

### Community

If you have any questions about using `pg-sync` by itself or in conjunction with Common Node, please post them to the [Common Node mailing list](https://groups.google.com/forum/#!forum/common-node).
    
### License 

(The MIT License)

Copyright (c) 2014+ Oleg Podsechin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.