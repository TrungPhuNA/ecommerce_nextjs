const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
  
app.prepare()
.then(() => {
    const server = express()


    //req là biến chưa tất cả các tham số request mà người dùng gủi lên
    // res là biến chứa tất cả thông số mà serve trả về


    //sản phẩm
    server.get('/san-pham', (req, res) => {
        console.log("Load page Product")
        return app.render(req, res, '/product');
    })

    //bài viết
    server.get('/bai-viet', (req, res) => {
        console.log("Load bai viet");
        console.log(req.params,"parmas");
        return app.render(req, res, '/article');
    })

    server.get('/bai-viet/:slug', (req, res) => {
        queryParams = { slug : req.params.slug}
        return app.render(req, res,'/article/detail',queryParams);
    });

    // server.get('/san-pham/:id', (req, res) => {
    //     const actualPage = '/product/detail';
        
    //     const queryParams = { id: req.params.id }
    //     console.log(queryParams);
    //     return app.render(req, res, actualPage, queryParams)
    // })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
    if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})