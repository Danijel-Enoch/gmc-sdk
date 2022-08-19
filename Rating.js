const axios = require("axios");

//create Starter Pack
const CreateRating=async(data)=>{
var config = {
  method: 'post',
  url: 'http://gentlemenscrib.vercel.app/api/shop/rate-product',
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
const GetRating=async(data)=>{
var config = {
  method: 'get',
  url: 'http://gentlemenscrib.vercel.app/api/shop/all-products',
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
const UpdateRating=async(id)=>{
var config = {
  method: 'patch',
  url: 'http://gentlemenscrib.vercel.app/api/shop/update-product/'+id,
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
const DeleteRating=async(id)=>{
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
    DeleteRating,
    UpdateRating,
    GetRating,
    CreateRating,
}