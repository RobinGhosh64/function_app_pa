var broker = require('../Utilities/httpbroker');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function CheckProfile called...');
    context.log('profile_id=' + context.bindingData.profile_id);
    
    if (context.bindingData.profile_id) {
        let url = "https://stay-blue.hospitalityrevolution.com/profile-service/v1/tenants/" + 
        context.bindingData.tenantId + "/properties/" + context.bindingData.propertyId + "/guests/"+context.bindingData.profile_id;
        let response;
        response = await broker.callHttpGet(url, context.bindingData.headers.token, req.body);

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: response.body
        };
        context.log('Our data ' + JSON.stringify(response.body));
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass profile_id on the query string or a param on the end-point!"
        };
    }
};