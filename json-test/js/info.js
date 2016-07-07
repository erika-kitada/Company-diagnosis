

var showJson = function(){
	//init HTML
	$("ul#card").html("");

	//create HTML
	$.getJSON("../json/data.json", function(data){
		$(data.diagnosis).each(function(){
			$('<li id="' + this.id + '"><h2>'+this.title+'</h2>'+
				'<p>' + this.p1 + '</p>'+
				'<p>' + this.p2 + '</p>'+
				'<div><a href="' + this.linkA + '">' + this.selectA + '</a>'+
				'<a href="' + this.linkB + '">' + this.selectB + '</a></div>'+
		'</li>').appendTo('ul#card');
	});

		var $card = $('#card li');
		var $tmp = $('#card0');

		$card.each(function(){
			$('#jsi-en').click(function(e){
				e.preventDefault();

				$card.first().show();
			});
			var $link = $(this).find('a');

			$link.on('click', function(){
				console.log($link.text());
				$tmp.hide();
				href = $(this).attr('href');
				if($(this).has(href)){
					$(href).fadeIn('slow');
				}
				$tmp = $(href);
				return false;
			});
		});

	});

};



$(function(){
	// changeCard();
	showJson();
});
