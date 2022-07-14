var goldfish = require('../model/goldfishItem')

var goldfishs = [];

var goldfish1 = goldfish.creategoldfish("", "", "", "");
var goldfish2 = goldfish.creategoldfish("", "", "", "");
var goldfish3 = goldfish.creategoldfish("", "", "", "");

goldfishs.push(goldfish1);
goldfishs.push(goldfish2);
goldfishs.push(goldfish3);


exports.getgoldfishs = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(goldfishs);
}

exports.savegoldfish = function(req, res) {
    let newgoldfish = goldfish.creategoldfish(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    goldfishs.push(newgoldfish);
    res.setHeader('Content-Type', 'application/json');
    res.send(goldfishs);
}

exports.getgoldfish = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
  res.send(goldfishs[req.params.goldfishId]);
}

exports.deletegoldfish = function(req, res) {
    goldfishs.splice(req.params.goldfishId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(goldfishs);
}

exports.updategoldfish = function(req, res) {
    // get the existing goldfish from the array
    var updatedgoldfish = goldfishs[req.params.goldfishId];

    // check to see what has been passed and update the local copy
    console.log(req.body.firstName);
    if(req.body.firstName)

        updatedgoldfish.firstName = req.body.firstName;
    if(req.body.lastName)
        updatedgoldfish.lastName = req.body.lastName;
    if(req.body.email)
        updatedgoldfish.email = req.body.email;
    if(req.body.password)
        updatedgoldfish.password = req.body.password;

    // save the local copy of the user back into the array
    goldfishs[req.params.goldfishId] = updatedgoldfish;

    res.setHeader('Content-Type', 'application/json');
    res.send(goldfishs[req.params.goldfishId]);
}