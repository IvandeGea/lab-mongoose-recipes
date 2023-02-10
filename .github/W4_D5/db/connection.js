const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost: 27017/video")
// .then(result => console.log("conexión correcta a ", result.connection.name))
// .catch(err => console.log("error:", err))

mongoose.set('strictQuery', false);

const conectar = async () => {
    try{
        let result = await mongoose.connect("mongodb://localhost:27017/video")
        console.log("conexión correcta a ", result.connection.name)

        mongoose.connection.on("disconnected", ()=>console.log("se ha desconnectado la base de datos"))
        mongoose.connection.on("error", ()=>console.log("error en la base de datos"))
        process.on("SIGINT", ()=>{
            console.log("SIGINT!!!! ", process.pid);
            mongoose.disconnect();
            process.kill(process.pid);
        })

    } catch(err){
        console.log("error: ", err);
    }
}
conectar();