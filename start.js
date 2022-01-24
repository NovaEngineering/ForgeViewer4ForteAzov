var express = require('express');
var ForgeSDK = require('forge-apis');


var forgeClientId = '26FNdMVnqjn59bIXfdMWmUn3MEYNrRjk';
var forgeClientSecret = 'IKJvSvbJk3l4P7mI';
var autorefresh = true;
var scopes = ['viewables:read'];
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', 3007);
app.get('/token', function (req, res) {
var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(forgeClientId, forgeClientSecret, scopes, autorefresh);
oAuth2TwoLegged.authenticate().then(function(credentials){
res.json(credentials);
})
})


var server = app.listen(app.get('port'), function() {
    console.log('Go to port 3007')
});