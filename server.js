// link to node's http library to run a web server
let http = require('http')

// link to node's url library to parse url parameters e.g. http://localhost:3000?subtotal=100
let url = require('url')

// include the accounting npm package we installed locally for this project only
let accounting = require('accounting')

// start the server
http.createServer((request, response) => {
    // http header with ok status
    response.writeHead(200);

    response.write('<h3>Tax Calculator</h3>');

    // read the subtotal parameter from the url string
    let query = url.parse(request.url, true).query;

    // parse the subtotal value so we can use it to calculate
    let subtotal = parseFloat(query.subtotal);

    // calculate tax and total using the subtotal value above
    let tax = subtotal * 0.13;
    let total = subtotal + tax;

    // display all 3 values, using the accounting package to format the numbers as currency
    response.write('<h4>Sub-Total:' + accounting.formatMoney(subtotal) + '</h4>' +
        '<h4>Tax: ' + accounting.formatMoney(tax) + '</h4>' +
        '<h4>Total: ' + accounting.formatMoney(total) + '</h4>');

    // end the response
    response.end();
}).listen(3000);
