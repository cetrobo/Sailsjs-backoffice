/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	create : function(req,res){



	
		var  params= (req.body.name) ?  req.body.name : undefined


		User.create({name: params.name}).exec(function UserList(err,created){

				return res.json({

					notice: 'Created user with name'+created.name

				});

		});
       
}
}

/*

		User.create({name:params.name}).exec(function createCB(err,created){
			console.log(created);
			return res.json({

				notice: 'Created user with name '+created.name

			});

		});
*/
	
