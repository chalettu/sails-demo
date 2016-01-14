/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(req,res){
        //here is where you would check the users login and if successfull
      //  res.json(200, {user: user, token: jwToken.issue({id: user.id})});
        var user={"id":12345};
        res.json(200, { token: jwToken.issue({id: user.id})});
    }
};

