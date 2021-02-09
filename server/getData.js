require('dotenv').config()
const ftp = require("basic-ftp")
 
example()
 
async function example() {
    console.log("begins function")
    const client = new ftp.Client()
    //client.ftp.verbose = true
    console.log("verbose whatever")
    try {
        console.log('inside try')
        await client.access({
            host: '45.226.176.12',
            user: 'ftptest',
            password: 'ftp2021$',
            // secure: true
            
        })
        await client.cd('ftp/sensores')
        await client.downloadTo( "MENSAJES.txt","MENSAJES.txt")
        // (new Date()).getTime()+
        console.log(await client.list())
        
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}
