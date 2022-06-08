const express = require('express');
const userControllor = require('../controllers/User.controller');

const routes = express();

routes.post('/add-user',userControllor.createUser);
routes.get('/',userControllor.getAll);
routes.get('/:_id',userControllor.getOneUser);
routes.put('/update/:_id',userControllor.updateUser);
routes.delete('/delete/:_id',userControllor.deleteUser);


module.exports = routes;