var request = require('request');

module.exports={
 
    /*
    *  Send http request
    */
   callHttpGet: function (url, accessToken, message) {
    return new Promise((resolve, reject) => {
       console.log('callHttpGet...')
        request.get({
            uri: url,
            json: true,
            headers: {
                'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json'}
        }, function(error, response, body) {
           
            if (!error && response.statusCode == 200) {
                //context.log('done....')
                resolve(body);
                //return body;
            } else if (error) {
                reject(error);
            } else {
                reject(new Error(`HTTP ${response.statusCode}: ${body}`));
            }
        });
    });
  },

   /*
    *  Send http request
    */
   callHttpPost: function (url, accessToken, message) {
    //return new Promise((resolve, reject) => {
       
        request.post({
            uri: url,
            json: true,
            headers: {
                'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json'},
            body: {'username':'bottler1', 'password': 'password'}
        }, function(error, response, body) {
           
            if (!error && response.statusCode == 200) {
                //context.log('done....')
                //resolve(body);
                return body;
            } else if (error) {
                reject(error);
            } else {
                reject(new Error(`HTTP ${response.statusCode}: ${body}`));
            }
        });
    //});
  }


};
