require(
	[
		'application/Application/Application',
		'jquery'
	], function (Application, $) {
		this.application = new Application(
			'main',
			{
				nazivAplikacije: 'Test'
			}
		);
	}
);
