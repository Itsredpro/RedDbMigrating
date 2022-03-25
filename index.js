const fs = require("fs")
const foldername = "RedDbMigratingFunctions"
const processpath = process.cwd()
const http = require("http")

if (!fs.existsSync(processpath + "/" +foldername)){
    fs.mkdirSync(processpath + "/" + foldername)
    fs.readFile(__dirname + "/migrate.js", (err,data)=>{
        fs.writeFileSync(processpath + "/" + foldername + "migrate.js", data)
    })
}
