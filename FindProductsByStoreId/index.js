module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function FindAssetsByStoreId called...');

    context.log('store_id=' + context.bindingData.store_id);
    if (context.bindingData.store_id) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: context.bindings.ourassets
        };
        context.log('Our data ' + JSON.stringify(context.bindings));
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass store_id on the query string or a param on the end-point!"
        };
    }
};