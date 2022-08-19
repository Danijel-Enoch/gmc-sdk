const axios = require("axios");

//create Starter Pack
const CreateStylists=async(data)=>{
var config = {
  method: 'post',
  url: 'http://gentlemenscrib.vercel.app/api/admin/create-stylist',
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
const GetStylists=async(data)=>{
var config = {
  method: 'get',
  url: 'http://gentlemenscrib.vercel.app/api/admin/all-stylist',
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
const UpdateStylist=async(id)=>{
var config = {
  method: 'patch',
  url: 'http://gentlemenscrib.vercel.app/api/admin/update-stylist/'+id,
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
const DeleteStylist=async(id)=>{
var config = {
    method: 'delete',
    url: 'http://gentlemenscrib.vercel.app/api/admin/delete-stylist/'+id,
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
    CreateStylists,
    GetStylists,
    UpdateStylist,
    DeleteStylist,

}