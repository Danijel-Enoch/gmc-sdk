const axios = require("axios");

//create Starter Pack
const CreateBloggers=async(data)=>{
var config = {
  method: 'post',
  url: 'http://gentlemenscrib.vercel.app/api/blog/auth/create',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  return JSON.stringify(response.data);
})
.catch(function (error) {
  return error;
});

}

// get all starter pack
const BloggersLogin=async(data)=>{
var config = {
  method: 'get',
  url: 'http://gentlemenscrib.vercel.app/api/blog/auth/login',
    headers: {
    'Content-Type': 'application/json'
    },
    data : data
};

axios(config)
.then(function (response) {
    return JSON.stringify(response.data);
})
.catch(function (error) {
    return error;
    });
}
module.exports = {
    BloggersLogin,
    CreateBloggers
}