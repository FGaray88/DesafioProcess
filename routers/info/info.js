const express = require('express');
const minimist = require("minimist")


const router = express.Router();

/* const args = minimist(process.argv.slice(2), {
    alias: {
        p: "port",
        n: "name",
        a: "age"
    }
});
console.log(`Hola mi nombre es ${args.name} y tengo ${args.age}. Puerto ${args.port}`);
 */

const args = minimist(process.argv.slice(2), {
    default: {
        port: 0,
        modo: "prod",
        debug: false
    },
    alias: {
        p: "port",
        m: "modo",
        d: "debug"
    }
})

/* console.log({
    modo: args.modo,
    port: args.port,
    debug: args.debug,
    otros: args._  //argumentos de entrada
});
 */

console.log(args.argv);



//Routes
router.get('/', async (req, res) => {
    res.json({
        "Argumentos de entrada": args._ 
    });
});

module.exports = router;

