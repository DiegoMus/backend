const { Router } = require ('express');
const router = Router();

const usuario = require('../sample.json');
console.log(usuario);

router.get('/', (req, res) => {
    res.json(usuario);
});

router.post('/', (req, res)=>{
    console.log(req.body);
    const {name, lastname}=req.body
    if(name && lastname){
        
    }
    res.send('recibido');
})

module.exports = router;