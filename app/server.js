const express = require("express")
const mongoose = require("mongoose");
const path = require("path");
const { AllRoutes } = require("./routers/router");
const morgan = require("morgan")
module.exports = class Application {
    #app = express();
    #DB_URI;
    #PORT;

    constructor(PORT, DB_URI){
        this.#PORT = PORT;
        this.#DB_URI = DB_URI
        this.configApplication(),
        this.connectToMongoose(),
        this.createServer(),
        this.createRoutes(),
        this.errorHandling()
    }

    configApplication(){
        this.#app.use(morgan("dev"))
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({extended: true}))
        this.#app.use(express.static(path.join(__dirname, "..", "public")));
    }
    
    createServer(){
        const http = require("http")
        http.createServer(this.#app).listen(this.#PORT, () => {
            console.log(`runining server on > http://localhost:${this.#PORT}`);
        })
    }

    connectToMongoose(){
        mongoose.set("strictQuery", true)
        mongoose.connect(this.#DB_URI).then(()=>{
            console.log("Connect to DB is Successful");
        }).catch((e)=>{
            console.log("No connection " + e);
        });

        mongoose.connection.on("connected" , () => {
            console.log("mongoose connected to db");
        })
        mongoose.connection.on("disconnected", () => {
            console.log("mongoose connection is disconnected");
        })

        process.on("SIGINT", async() => {
            console.log("CLOSED");
            await mongoose.connection.close()
            process.exit(0)
        })
    }

    createRoutes(){
        this.#app.use(AllRoutes)
        
    }

    errorHandling(){
        this.#app.use((req,res,next) => {
            return res.status(404).json({
                status: 404,
                message: "page not found"
            })
        })
        this.#app.use((error, req,res,next)=> {
            const statusCode = error.status || 500;
            const message = error.message || "Internal Server Error";
            return res.status(statusCode).json({
                statusCode,
                message
            })
        })
    }
}