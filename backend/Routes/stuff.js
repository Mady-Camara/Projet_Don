const express = require('express');
const router = express.Router();
const stuffComtroller = require('../Controlllers/stuff');
const auth = require('../middleware/authentification');
const multer = require('../middleware/multer-config');

router.post('/',auth, multer, stuffComtroller.createThing);


router.put('/:id',auth, multer, stuffComtroller.modifyThing);

router.delete('/:id',auth, stuffComtroller.deleteThing);


router.get('/:id',auth, stuffComtroller.getThing);


router.get('/',auth, stuffComtroller.getAllThings);

module.exports = router;