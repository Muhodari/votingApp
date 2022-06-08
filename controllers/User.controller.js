const User = require('../models/User.model');


exports.createUser = (req,res)=>{
  const user = new User({
    names:req.body.names,
    phone:req.body.phone,
    email:req.body.email,
    national_id_number:req.body.national_id_number,
    birth_date:req.body.birth_date,
    age:req.body.age,
    province:req.body.province,
    district:req.body.district,
    sector:req.body.sector,
    cell:req.body.cell,
    village:req.body.village
  });

  const userExist = User.findOne({email:req.body.email});
  if(userExist !==""){
    res.status(405).send({
        message:"user already exist",
        results:savedData,
    }) 
}


else{
  user.save().then((savedData)=>{



      res.status(201).send({
          message:"user created successfully",
          results:savedData,
      })
  }).catch(()=>{
      return res.status(401).send({message:'failed to create the system unkown error occured'});
  })

}
}


exports.getAll = (req,res)=>{

    User.find().then((result)=>{
        res.status(201).send({
            message:"list of users",
            users:result,
        })
    }).catch(error=>{
        return res.status(401).send({message:'failed o load users'});
    })
}

exports.getOneUser = (req,res)=>{

    User.findOne({_id:Object(req.params._id)}).then((result)=>{
    return res.status(200).send({
        message:"user found successfully",
        user: result
    })
        
    }).catch(()=>{
        return res.status(401).send({
            message:"user Not",
            
        })

    });
};


exports.updateUser= (req,res)=>{
// let sagem=[]; 
// User.findOne({_id:Object(req.params._id)}).then((user)=>{
//     this.sagem = user;
// })

// console.log(sagem);




    let newUser = new User({ 
        _id:req.params._id,   
        names:req.body.names,
        phone:req.body.phone,
        email:req.body.email,
        national_id_number:req.body.national_id_number,
        birth_date:req.body.birth_date,
        age:req.body.age,
        province:req.body.province,
        district:req.body.district,
        sector:req.body.sector,
        cell:req.body.cell,
        village:req.body.village
        })
      
    
        console.log(newUser);
    
User.updateOne({_id:Object(req.params._id)},newUser).then((user)=>{

        return res.status(201).send({
            message:"user updated successfully",
            user:user
        })

    }).catch((error)=>{
        return res.status(500).send({
            message:'failed to update the user',
            error:error

        })
    })




}