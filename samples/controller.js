/**
 * {CONTROLLER}
 *
 * @description :: Controller generated by GRT-Scaffold
 * @help        :: 
 */

 module.exports = {
 	index: function(req,res) {
 		res.view('index',{layout:"layout"});
 	},
 	create: function(req,res) {
 		{MODEL}.create({{FIELDS}}).exec(function (err, data) {
 			if (!err) {
 				res.send(200);
 			} else {
 				res.send(500, err);
 			}
 		});
 	},
 	delete: function(req,res) {
 		var id = req.param('id');
 		{MODEL}.destroy({id:id}).exec(function(err) {
 			if (!err) {
 				res.send(200);
 			} else {
 				res.send(500, err);
 			}
 		});
 	},
 	update: function(req,res) {
 		{MODEL}.update({id:id},{{FIELDS}}).exec(function (err, data) {
 			if (!err) {
 				res.send(200);
 			} else {
 				res.send(500, err);
 			}
 		});
 	}
 };