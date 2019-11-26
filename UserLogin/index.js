module.exports = async function (context, req) {
    var aguid = require('aguid');
    var JWT   = require('jsonwebtoken');
    
    
    context.log('JavaScript HTTP trigger UserLogin function processed a request.');
    var username=null;
    var password = null;
    if (req.body) {
       username = req.body.username;  // populate the context binding variables
       password = req.body.password;  // populate the context binding variables

       var user = context.bindings.ourUser;  // Use our read binding


       var session = {
                valid: true, // this will be set to false when the person logs out
                session_id: aguid(),// a random session id
                id:user.id,
                username:user.username,
                exp: new Date().getTime() + 55 * 60 * 1000 // expires in 55 minutes time
      };
      var token = JWT.sign(session, 'admin'); // create and sign a token

 
      context.res = {
        status: 200,
        body:  
            {
            "success": true,
            "message": "Enjoy your token!",
            "token": token
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
