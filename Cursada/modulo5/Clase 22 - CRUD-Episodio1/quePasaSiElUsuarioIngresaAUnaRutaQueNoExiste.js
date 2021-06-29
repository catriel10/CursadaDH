const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use((req, res, next) => {
 res.status(404).render('not-found');
})

// Otras rutas más

app.use(router);