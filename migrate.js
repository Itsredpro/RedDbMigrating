const location = process.argv[2]
const version = process.argv[3]
const excmd = require("child_process").exec
const timeperfile = 5
var axiosinstalled = false
var reddbinstalled = false

async function main(){
    try {
        require.resolve("axios")
        axiosinstalled = true
        require.resolve(version)
        reddbinstalled = true
        console.log("All dependencies installed. . .")
    } catch(e) {
        console.error("Dependencies : not found");

        if (!axiosinstalled){
            excmd("npm install axios", (error, stout, sterr) =>{
                console.log("Added 1 package - axios")
                main()
            })
        }
        if (!reddbinstalled){
            excmd("npm install axios", (error, stout, sterr) =>{
                if (error) return console.error("Reddb version not found.")
                console.log("Added 1 package - " + version)
                main()
            })
        }
        
    }

    if ((!location) || (!version)){
        console.error("No http link / version provided.")
    } else {
        if (location.includes("http") && location.includes("sharding")){
            console.log("Preparing.. ")
            const reddb = require(version)
            console.log("Starting.. ")
            

        } else {
            console.error("Link is not a http(s) link / invalid link..")
        }
    }
}

main()