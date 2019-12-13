module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function AddAsset called...');
    /*
    * Event Grid topic is used to send to a logic app
    */

    
    //var broker = require('./eventgridbroker');
    var httpbroker = require('../Utilities/httpbroker');
   // broker.sendTransaction(null,'POC.Asset.Add', req.body);

    // context.bindings.outputDocument = JSON.stringify(req.body);
    var resp=httpbroker.callHttpGet('https://rsg-webapp-tcc3.azurewebsites.net/documentation', null, null);
    context.res = {
        status: 200,
        body: resp
    };
    
};
