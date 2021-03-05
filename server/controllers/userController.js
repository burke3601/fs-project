require('dotenv').config();
const { User } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs');

const processLogin = async (req, res) =>{
    console.log( 'req,res')
const {name,password} = req.body;
    console.log(name)
   
    const user = await User.findOne({
        where: {
            username: name,
           
        }
    })
    try {
    if (user) {
        console.log('valid user...checking password', user);
        const isValid = bcrypt.compareSync(password, user.hash);
        if (isValid) {
            console.log('password is good!');
            // Save some information about the user in their
            // session - "activate their magic band"

            // req.session is added to the request by the session middleware
            req.session.user = {
                name,           // so we can greet them
                id: user.id         // so I can pull their content on another page
            };
            // We save the session (which is really just a file on the server)
            req.session.save(() => {
                // Only after the saving has finished, then we redirect them.
                res.json('good');      
            });

        } else {
            console.log('but password is wrong');
            res.json("nopassword");
        }

}else{
    res.json("nouser")
}
}
    catch(e) {
     
        res.json({message: 'There has been an Error', e})
    }
    
};

const processLogout = (req, res) => {
    console.log("Logging Out");
    req.session.destroy(()=>{
        res.json("Session Destroyed")
    })
}


module.exports={processLogin, processLogout};