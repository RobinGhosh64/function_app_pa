var broker = require('../Utilities/httpbroker');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function CreateProfile called...');
    context.log('CreateProfile Body =' + req.body);
    
    if (req.body) {
        let fileurl = "https://rsg-webapp-tcc3.azurewebsites.net/asset/add";
        let response;
        response = await broker.callHttpPost(fileurl, '1212', req.body);

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: response.body
        };
        context.log('Our data ' + JSON.stringify(response.body));
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass Request Body!!!"
        };
    }
};