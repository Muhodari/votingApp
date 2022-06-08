
const SwaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = require('./app');

app.get('/',(req,res)=>{
res.send('Amazing grace');
})

app.use(
    '/api-docs',
    SwaggerUi.serve,
    SwaggerUi.setup(swaggerDocument)
);


const connenction =app.listen(3000,()=>{
    console.log('listen to port 3000')
});

