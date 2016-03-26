require(
	[
		'application/Klopa/Klopa',
		'model/Menu/Menu'
	], function (Klopa, Main) {
		this.application = new Klopa(
			window.document.body
		);

		window.Menu = Main;


		console.log('Saljem zahtev');

		var promise = Menu.findAll();

		promise.then(
			function (menus) {
				console.log('Obradjujem odgovor na zahtev');
				menus.forEach(function (menu) {
					console.log(menu.name);
				})
			}
		);

		console.log('Nastavljam izvrsavanje!');
	}
);