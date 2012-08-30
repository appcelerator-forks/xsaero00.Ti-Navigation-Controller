exports.TestWindow = TestWindow = function(navController) {
	var win = Ti.UI.createWindow({
		title:'Window '+navController.windowStack.length,
		backgroundColor:'#fff',
		layout:'vertical'
	});

	var add = Ti.UI.createButton({
		title:'Add A New Window',
		height:'50dp',
		width:'200dp',
		top:'20dp'
	});
	add.addEventListener('click', function() {
		navController.open(new TestWindow(navController));
	});
	win.add(add);

	var home = Ti.UI.createButton({
		title:'Go to the Home Window',
		height:'50dp',
		width:'200dp',
		top:'20dp'
	});
	home.addEventListener('click', function() {
		navController.home();
	});
	win.add(home);
	
	var addfh = Ti.UI.createButton({
		title:'Open New From Home',
		height:'50dp',
		width:'200dp',
		top:'20dp'
	});
	addfh.addEventListener('click', function() {
		navController.openFromHome(new TestWindow(navController));
	});
	win.add(addfh);

	return win;
};