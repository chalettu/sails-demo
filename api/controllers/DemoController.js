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
    }
};
