
module.exports = function(app) {
	// application -------------------------------------------------------------

	// app.get('/api/todos', function(req, res) {

	// 	// use mongoose to get all todos in the database
	// 	Todo.find(function(err, todos) {

	// 		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
	// 		if (err)
	// 			res.send(err)

	// 		res.json(todos); // return all todos in JSON format
	// 	});
	// });

	app.get('/api', function(req, res) {
		console.log("nodefs starts!");
    	res.json({ message: 'hooray! welcome to our api!' });   

	});

	// app.post('/api/write', function(req, res) {

	// 	// create a todo, information comes from AJAX request from Angular
		

	// });

	app.get('*', function(req, res) {
		res.sendFile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};