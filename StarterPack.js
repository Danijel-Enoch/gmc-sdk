const axios = require("axios");

//create Starter Pack
const CreateStarterPack=async(data)=>{
var config = {
  method: 'post',
  url: 'http://gentlemenscrib.vercel.app/api/starterpack/create-starter-pack',
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
const GetStarterPack=async(data)=>{
var config = {
  method: 'get',
  url: 'http://gentlemenscrib.vercel.app/api/starterpack/all-starter-packs',
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
//update starter pack
const UpdateStarterPack=async(id)=>{
var config = {
  method: 'patch',
  url: 'http://gentlemenscrib.vercel.app/api/starterpack/update-starter-pack/'+id,
    headers: {
    'Content-Type': 'application/json'
    },
};
 axios(config).then(function (response) {
    return JSON.stringify(response.data);
    })
    .catch(function (error) {
        return error;
    }
    );

}

//delete starter pack
const DeleteStarterPack=async(id)=>{
var config = {
    method: 'delete',
    url: 'http://gentlemenscrib.vercel.app/api/starterpack/delete-starter-pack/'+id,
    headers: {
    'Content-Type': 'application/json'
    },
};
axios(config).then(function (response) {
    return JSON.stringify(response.data);
    })
    .catch(function (error) {
        return error;
    }
    );
}

module.exports = {
    CreateStarterPack,
    GetStarterPack,
    UpdateStarterPack,

}