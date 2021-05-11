const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
require('dotenv/config');

//* Import Routes
const postsRoute = require('./routes/posts/posts');

class Application {
    constructor() {
        this.setMiddlewares();
        this.dbConfig();
        this.setRoutes();
    }
    //! Middlewares
    setMiddlewares() {
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
    }
    //! DB
    dbConfig() {
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (!err) {
                app.listen(3000, console.log("server is runing"));
                console.log("connected to the db");
            }
        });
    }
    //! Routes
    setRoutes() {
        app.get('/', (req, res) => {
            res.send("we are on home")
        });
        app.use("/posts", postsRoute);
    };
}

new Application();

