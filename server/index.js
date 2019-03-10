const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const Web3 = require('web3');
const TruffleContract = require('truffle-contract');
const web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
const web3 = new Web3(web3Provider);

/* var data = readFileSync('../build/contracts/')
    var HelloWorldArtifact = data;
    App.contracts.HelloWorld = TruffleContract(HelloWorldArtifact);
    App.contracts.HelloWorld.setProvider(App.web3Provider);      */

const app = express();

const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://127.0.0.1:27017");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name:  String,
    aadhar: String,
    etheriumaddress: String
  });
const Account = mongoose.model('Account', accountSchema);

app.use(express.static('client'));
app.use(express.static('build/contracts'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
});

app.get('/accounts', (req, res) => {
    web3.eth.getAccounts(function (error, accounts) {
        if (error) {
            App.showError(error);
        }
        res.json(accounts);
    });
});

app.post('/addaccount', (req, res) => {
    console.log(req.body);
    if (req.body.aadhar && req.body.etheriumaddress) {
            var userAccount = new Account(req.body);
            userAccount.save();
            res.send("User addedd successfully");
    } else {
        res.status(413).send("Required paramaters missing");
    }
});
app.get('/accountexist', (req, res) => {
    if (req.query.aadhar) {
            Account.findOne({ aadhar: req.query.aadhar }, function(err, character) {
                if(!err) {
                    res.send(character);
                } else {
                    res.send(err);
                }
              });
    } else {
        res.status(413).send("Required paramaters missing");
    }
});
app.get('*', (req, res) => {
    res.status(404);
    res.send('Ooops... this URL does not exist');
});

app.listen(PORT, () => {
    console.log(`Ethereum running on port ${PORT}...`);
});



