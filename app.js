const express = require('express');
const busboyBodyParser = require('busboy-body-parser');
const Routes = require ('./routes/index');

class App {
    constructor(){
        this.app = express();
        this.router = new Routes();
        this.config();
        this.router.routes(this.app)
    }
    
    config(){
        this.app.use(express.static("public"));
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.json({ limit: '25mb'}));
        this.app.use(busboyBodyParser({}));
        this.app.set("view engine", "ejs");
        this.app.use((req, res, next)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Expose-Headers', 'x-total-count');
            res.header('Access-Control-Allow-Methods','GET,POST,PUT');
            res.header('Access-Control-Allow-Headers','Content-Type,authorization');

            next()
        });
    }
}
module.exports = new App().app;