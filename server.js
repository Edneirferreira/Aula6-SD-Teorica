const config = require("config");
const exoress = require("express");

console.log("Meu primeiro servidor");

const app = express();

let port = config.get("server.port");

app.listen(port, function(){
    console.log("Servidor iniciado e escutando na porta " +port);
});

