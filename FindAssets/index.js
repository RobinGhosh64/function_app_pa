module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function FindAssets called...');

    context.res = {
            // status: 200, /* Defaults to 200 */
            body: context.bindings.ourassets
    };
    context.log('Our data ' + JSON.stringify(context.bindings));
    
};