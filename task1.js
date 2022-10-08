//use http module as web server

const http = require('http')

const url = require('url')

//start server on port 3000
http.createServer((req, res) => {
    res.writeHead(200)
    res.write('<h1>Tax Calculator</h1>')

    //use url module to read the url parse(the part after ? )
    const query = url.parse(req.url, true).query

    //parse the subtotal value from the url parse
    let subtotal = query.subtotal
    
    res.write('Sub Total: ' + subtotal)

    let tax = subtotal * 0.13
    //res.write('<p>Tax: ' + tax + '</p>')
    res.write('<p>Tax: ${tax} </p>')

    let total = parseFloat(subtotal) + parseFloat(tax)
    res.write(('<p>Total: ${total} </p>'))

    res.end()
}).listen(3000)

console.log('server running')