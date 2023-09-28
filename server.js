const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:8085' // or wherever the requests are coming from
}));

app.use('/api', createProxyMiddleware({ 
    target: 'https://api.dandiarchive.org', // destination server
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
        '^/api/': '/api/', // rewrite path
    },
}));

app.listen(8000);