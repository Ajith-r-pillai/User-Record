const db=require('./db')
 
// function for add user
const addUser=(id,uname,Dob,email,salary,gender)=>{
    return db.User.findOne({id}).then(result=>{
         if(result){
             return {
                 statusCode:404,
                 message:"user already exist"
             }
         
             }
             else{
                 const newEMP=new db.User({
                     id,uname,Dob,email,salary,gender})
                 newEMP.save()
 
                 return{
                     statusCode:200,
                     message  :"User detailes added"
                     
                 }
         }
     })
 
 }

 // function for get all useres
const allUser=()=>{
    return db.User.find().then(result=>{
        if (result) {
            return {
                statusCode:200,
                employees: result
            }
        }
        else{
            return {
                statusCode:404,
                message:"no data avilabe"
            }
        }
    })
}

// function for delete a user
const removeUser=(eid)=>{
    return db.User.deleteOne({id:eid}).then(result=>{
           if(result){
               
               return{
                   statusCode:200,
                   message :"User removed",
               
                  }
           
           }
           else{
               return{
                   statusCode:404,
                   message:"User Not exist"
               }
           }
       })
   }


   // function for get one user
   const getAnUser=(id)=>{
    return  db.User.findOne({id}).then(result=>{
          if(result){
           return{
               statusCode:200,
               User:result
           }
          }
          else{
           return{
               statusCode:404,
               message:"User Not exist"
           }
          } 
       })
   }

// function for edit a user
   const editUser=(id,uname,Dob,email,salary,gender)=>{
    return db.User.findOne({id}).then(result=>{
         if(result){
             result.id=id,
             result.uname=uname,
             result.Dob=Dob,
             result.email=email,
             result.salary=salary
             result.gender=gender
             result.save()
 
             return{
                 statusCode:200,
                 message :"User updated",
             
                }
         }
         else{
             return{
                 statusCode:404,
                 message:"User Not exist"
             }
 
         }
     })
 }




 module.exports={

    addUser,allUser,removeUser,getAnUser,editUser
}