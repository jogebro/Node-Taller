const http = require("http");

const server = http.createServer((req, res)=>{
    const url = req.url;
    const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`

    switch (url) {
        case "/":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Home</title>
            ${bootstrap}
            </head>`);
            res.write(`
            <body>
            <div class="d-flex flex-column align-items-center justify-content-center border border-5 border-dark rounded-3 mt-5 m-auto p-4 bg-dark text-white w-25">
                <h1>VentaArtemis</h1>
                <div class="d-flex flex-column">
                    <a class="text-decoration-none btn btn-secondary fs-4 border-dark" href='users'>Go Users</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='categories'>Go categories</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='products'>Go products</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='employees'>Go employees</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='customer'>Go customer</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='sales'>Go sales</a>
                    <a class="text-decoration-none btn btn-secondary mt-3 fs-4 border-dark"" href='shopping'>Go shopping</a>
                </div>
            </div>
            </body>`);
            res.write("</html>");
            res.end();  
            break;

        case "/users":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Users</title>
            ${bootstrap}
            </head>`);
            res.write(`
            <body>
            <div class="d-flex flex-column align-items-center justify-content-center border border-5 border-dark rounded-3 mt-5 m-auto p-4 bg-dark text-white w-25">
            <h1>Usuarios</h1>
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Joel Santiago Abril</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Juan David Sepulveda</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Vermen Ayala</td>
                        </tr>
                    </tbody>
                    </table>
            <a class="text-decoration-none btn btn-secondary fs-5 border-dark" href='/'>Go Home</a>
            </div>
            </body>`);
            res.write("</html>");
            res.end();  
            break;
    
        case "/categories":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Categorias</title>
            </head>`);
            res.write(`
            <body>
            <h1>Categorias</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;
        
        case "/products":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Productos</title>
            </head>`);
            res.write(`
            <body>
            <h1>Productos</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;
        
        case "/employees":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Employees</title>
            </head>`);
            res.write(`
            <body>
            <h1>Empleados</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;

        case "/customer":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Customer</title>
            </head>`);
            res.write(`
            <body>
            <h1>Clientes</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;

        case "/sales":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Sales</title>
            </head>`);
            res.write(`
            <body>
            <h1>Ventas</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;

        case "/shopping":
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write(`
            <head>
            <title>Taller Node - Shopping</title>
            </head>`);
            res.write(`
            <body>
            <h1>Compras</h1>
            <a href='/'>Go Home</a>
            </body>`);
            res.write("</html>");
            res.end();  
            break;
    }

});

server.listen(7000);