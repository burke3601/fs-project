const express = require ('express');
const bcrypt = require('bcryptjs');

async function addUser(name, password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
        username:name,
        hash
         
    })
}

addUser("sysadmin4", "abc123")