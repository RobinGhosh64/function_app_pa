const request = require("request");
const util = require('util');
const getRequestAsync = util.promisify(request.get);
const postRequestAsync = util.promisify(request.post);

module.exports={

    callHttpGet: async function (uri,token, payload) {
        console.log('Calling http post ..');
        let response;
        try {
            response = getRequestAsync(
                {
                    url: uri, 
                    encoding: null, 
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
                        'cache-control': 'max-age=0',
                    },
                    timeout:10000
                });
        } catch (error) {
            // Any exceptions raised while processing error do not need to be handled like we had to when returning a new Promise. The exception will be properly caught by Azure Functions
            console.log(error.toString());
            // Re-throwing this because Azure functions automatically catches this exception and will mark your execution as "failed"
            throw error;
        }
        return response.body;
    },

    callHttpPost: async function  (uri,token, payload) {
        console.log('Calling http post ..');
        let fileurl = "https://secure.gravatar.com/avatar/b5637829ffde7725999757c7dfb6696c?s=512&d=mm&r=g&1";
        let response;
        try {
            response = await postRequestAsync(
                {
                    url: uri, 
                    body: payload,
                    encoding: null, 
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
                        'cache-control': 'max-age=0',
                        'Authorization':'Bearer ' + token
                    },
                    timeout:10000
                });
        } catch (error) {
            // Any exceptions raised while processing error do not need to be handled like we had to when returning a new Promise. The exception will be properly caught by Azure Functions
            console.log(error.toString());
            // Re-throwing this because Azure functions automatically catches this exception and will mark your execution as "failed"
            throw error;
        }
        return response.body;
    },



};