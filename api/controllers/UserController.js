/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

			create:function(req,res){

				var params= (req.params.all()) ? req.params.all() : 'undefined';
				
				User.create({name :params.name}).exec(function(err,user){
						//console.log(success);
					if(err){

						res.send("Error:Sorry!Something went Wrong");

					}else{

						return res.redirect("/user");

					}

				});


}
};
/*

	//WITh SERVICE

		create:function(req,res){

				var params=(req.params.all()) ? req.params.all() : 'undefined'
				
				ServiceCreate.addUser(params,function(success){
						//console.log(success);
					res.json(success);

				});

	
*/
	
