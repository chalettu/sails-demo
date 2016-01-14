/**
 * SecureController
 *
 * @description :: Server-side logic for managing secures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	secureStuff:function(req,res){


        res.json(200, {"isSecure":true});
    }
};

