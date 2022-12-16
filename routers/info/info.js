const express = require('express');
const minimist = require("minimist")
const { fork } = require("child_process");



const router = express.Router();


const args = minimist(process.argv.slice(2), { 

})



//Routes
router.get('/', async (req, res) => {
    res.json({
        "Argumentos de entrada": args._,
        "Plataforma": process.platform,
        "Version Node": process.version,
        "Memoria total reservada": process.memoryUsage().rss,
        "Path de ejecucion": process.execPath,
        "Process Id": process.pid,
        "Carpeta del proyecto": process.cwd()
    });
});

router.get('/random', async (req, res) => {
    const { qty } = req.query
    const computo = fork("./fork/computo.js")
    computo.send(qty || 100000000);
    computo.on("message", (data) => {
        res.json({
            resultado: data
        });
    });
});









module.exports = router;

