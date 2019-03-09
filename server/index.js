const express = require('express');
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

app.use(express.static('client'));
app.use(express.static('build/contracts'));




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

app.get('*', (req, res) => {
    res.status(404);
    res.send('Ooops... this URL does not exist');
});

app.listen(PORT, () => {
    console.log(`TechBrij Ethereum HelloWorld App running on port ${PORT}...`);
});



