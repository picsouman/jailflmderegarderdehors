const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const path = require('path');
const port = 3000

app.use(express.static('browser'))
app.use('/weather', createProxyMiddleware({
    target: 'https://aviationweather.gov',
    changeOrigin: true,
    pathRewrite: {
        '^/weather': '',
    },
}));

app.use('/aviation-meteo', createProxyMiddleware({
    target: 'https://aviation.meteo.fr',
    changeOrigin: true,
    pathRewrite: {
        '^/aviation-meteo': '',
    },
}));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'ui/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})