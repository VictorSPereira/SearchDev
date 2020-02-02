const { Router } = require('express');
const DevControllers = require('./controllers/DevControllers');
const SearchControllers = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);
routes.get('/search', SearchControllers.index);
routes.post('/update', DevControllers.update);
routes.delete('/delete', DevControllers.destroy);

module.exports = routes;