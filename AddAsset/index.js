module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function AddAsset called...');
    /*
    * Event Grid topic is used to send to a logic app
    */

    var aguid = require('aguid');
    var JWT   = require('jsonwebtoken');
    var broker = require('./eventgridbroker');
    broker.sendTransaction(null,'POC.Asset.Add', req.body);

    // context.bindings.outputDocument = JSON.stringify(req.body);
    context.res = {
        status: 200,
        body: "ok"
    };
    
};
