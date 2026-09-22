const express = required('express');

const server = express;
const PORT = 1234;
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME,() => {
    console.log(`Server is running on :${PORT}:$(HOSTNAME)
        `)
    });
    
application.use(express.json());
application.use(requireAuth);
application.use(/api/users, /api/products, /api/orders, /api/categories, routes);

    