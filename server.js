const express = require("express");
const app = express();



app.use(express.static("public"));


const settings = {
    port: 4300,
    host: "http://localhost:"
}


app.listen(settings.port, () => {
    console.log(`Your app is running on ${settings.host}${settings.port}`);
})