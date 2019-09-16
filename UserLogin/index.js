module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger UserLogin function processed a request.');

    if (req.body.username) {
       context.bindings.outputDocument = JSON.stringify(req.body);
       context.res = {
        status: 200,
        body: "ok"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
