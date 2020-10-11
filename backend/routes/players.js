const {Router} = require ('express');
const router = Router();
// para poder especificar la ruta de guardado de datos en el servidor
router.get('/', (req, res) => res.json({text: 'Hello World'}));
module.exports = router;