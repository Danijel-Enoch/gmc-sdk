const axios=require("axios");
const config=require("./config.json");

const api_url=config.base_url;


const login=async(data)=>{
    var config = {
        method: 'get',
        url: 'http://gentlemenscrib.vercel.app/api/admin/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
}
      
    

const signUp=async(data)=>{
   // var axios = require('axios');
// var data = JSON.stringify({
//   "username": "Daniel",
//   "password": "daniel",
//   "email": "Daniel@gmail.com"
// });
var config = {
  method: 'post',
  url: 'http://gentlemenscrib.vercel.app/api/admin/create',
  headers: { 
    'Content-Type': 'application/json'
  },
  //data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}

const GetAllAdmin=async()=>{
    var data = '';
    
    var config = {
      method: 'get',
      url: 'http://gentlemenscrib.vercel.app/api/admin/all-create-admins',
      headers: { },
     // data : data
    };
    
    axios(config)
    .then(function (response) {
      return(response.data)
    })
    .catch(function (error) {
      return(error);
    });

}

async function main(){
    try{
       // const result=await GetAllAdmin()
    // await GetAllAdmin();
    }catch(error){
        console.log(error)
    }
    
}

main()


module.exports={
    login,
    signUp,
    GetAllAdmin
}