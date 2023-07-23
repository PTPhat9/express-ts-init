import express from "express";
import cookieParser from "cookie-parser";

export class App {
    public app = express()
    public port = process.env.PORT || 8000

    constructor() {
        this.initRoutes()
        this.initMiddlewares()
        this.initDatabase()
        this.listen()
    }

    initDatabase() {
        console.log("init database")

    }

    initMiddlewares() {
        console.log("init middlewares")
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cookieParser())
    }

    listen() {
        console.log("listen")
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`)
        })
    }

    initRoutes() {
        console.log("init routes")
    }

}
