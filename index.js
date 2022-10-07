//index con expres
const express = require("express");
const morgan = require("morgan"); //midle ware de tercereros/ npm install morgan
const app= express();
var XMLHttpRequest = require('xhr2');

//Idiomatic expression in express to route and respond to a client request
app.get('/nuevo', (req, res) => {        //get requests to the root ("/") will route here
    var data = JSON.stringify({
        "accountId": "RybbG8pfOw857KcJXK+Jlg==",
        "authorizationId": "0cj1A/66CIcUN8PuWqiiOA=="
      });
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            respuesta=this.responseText;
            res.status(200).json({
                respuesta
            });
        }
      });
      
      xhr.open("POST", "http://test.bnb.com.bo/ClientAuthentication.API/api/v1/auth/token");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.send(data);
        
});


