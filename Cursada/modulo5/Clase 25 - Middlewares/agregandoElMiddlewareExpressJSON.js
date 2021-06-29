const express = require('express');
const app = express();

const middlewareJSON =express.json()

//Agrear el middleware aquí


//app.?????
app.use(middlewareJSON);

const router = express.Router();
router.post('/crear-usuario', (req, res) => {
	console.log(req.body);

	res.send('El usuario se creó con éxito');
});

app.use(router);

app.listen(3000);