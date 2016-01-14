/**
 * DemoController
 *
 * @description :: Server-side logic for managing demoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	demoSocket:function(req,res){

        if(req.isSocket){
            // subscribe client to model changes
            Users.watch(req.socket);
            console.log( 'User subscribed to ' + req.socket.id );
        }
        else{
            res.json(200, { "status":"connect via socket please"});
        }
    },
    testFunction:function(req,res){
        var params=req.params.all();
        res.json(200, { token: jwToken.issue({id: user.id})});
    },
    findUsers:function(req,res){
        var user_id="";
        Users.find({"first_name":"Chris"}).exec(function(err, records){
            res.json(200, records);
        });

    }
};
