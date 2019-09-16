module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log('Id=' + context.bindingData.customer_id);
    if (context.bindingData.customer_id) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: context.bindings.ourassets
        };
        context.log('Our data ' + JSON.stringify(context.bindings));
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};