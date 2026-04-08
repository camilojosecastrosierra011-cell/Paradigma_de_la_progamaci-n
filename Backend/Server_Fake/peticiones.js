var settings = {
  "url": "http://localhost:3000/viajes/1",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/3",
  "method": "PUT",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/4",
  "method": "PUT",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/viajes",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "fc50",
    "first_name": "Juan",
    "last_name": "Coll",
    "email": "juancoll6@gmail.sp.og",
    "gender": "Man",
    "ip_address": "328.281.245.795",
    "ip_country": "Colombia"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/viajes",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "cd25",
    "first_name": "Camilo",
    "last_name": "Jose",
    "email": "Camilojose91@hotmeil.co.nr",
    "gender": "Male",
    "ip_address": "435.135.368.901",
    "ip_country": "Argentina"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/7",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/8",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "url": "http://localhost:3000/viajes/9",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/viajes/10",
  "method": "PUT",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});