const express = require("express");
const apiRoutes = require("./routers/app.routers");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const envConfig = require("./config")
const passport = require('./middlewares/passport.js');
const dbConfig = require('./db/config');

const minimist = require("minimist")
const args = minimist(process.argv.slice(2), {default: {port: 8080}});
const PORT = args.port;

const app = express();


// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
    name: 'my-session',
    secret: 'top-secret-51',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: MongoStore.create({
        mongoUrl: dbConfig.mongodb.connectTo("DesafioInicioSesion")
    }),
    cookie: {
        maxAge: 60000
    }
}));

app.use(passport.initialize())
app.use(passport.session())


app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
app.use("/", apiRoutes);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://${envConfig.HOST}:${PORT}`);
});

