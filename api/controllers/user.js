const UserModel = require('../models/user.js')
const bcrypt = require('bcrypt');

const addNewAdmin = async (req,res)=>{
   
  //validation
  const hashedPass = bcrypt.hashSync(req.body.password,10);
  const user = {
    ...req.body, password:hashedPass
  }

 await UserModel.create(user);
 
   const data = req.body;
  res.json({
    mes:"admin added",
    data
  })
}



const userController = {
    addNewAdmin,
}

module.exports = userController;