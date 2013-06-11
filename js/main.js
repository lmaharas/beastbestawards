$(document).ready(function() {

    $.getJSON("data.json", function(data){
        prepData(data);
        dust.render("body", data, function(err, out) {
            $("body").html(out);

			navOpenClose();
			openOverlay();

		});
    });

});


function prepData(data) {
	var items = data.twitter;
	data.twitter = {
		items: items,
		categories: getCategories(items)
	};
	
	data.webCategories = getCategories(data.web);
	console.log(data);
}

function getCategories(items) {
	var set = {}, result = [], i, n, k;
	for(i = 0, n = items.length; i < n ; i++) {
		set[items[i].category] = true;
	}

	for(k in set) {
		if(set.hasOwnProperty(k)) {
			result.push(k);
		}
	}

	return result.sort();
}

function navOpenClose() {

	$('.heading').on('click', function(event) {
		event.preventDefault();
		var open = false;

		closeOverlay();

		$(this).toggleClass('active');
		$(this).next('.dropdown').stop().slideToggle(300).toggleClass('collapse');
		$(this).next('.wrapper').css({'visibility': 'visibile', 'display': 'block'}).toggleClass('collapse');
		open = true;

		showHideContent($(this));
	});

}

function showHideContent(el) {
	var el,
		anchor = el.find('a'),
		link = anchor.attr('href');

	if(link != 'about') {
		$('.content').find('.' + link ).stop().toggle();
	}

}

function openOverlay() {

	var overlayWidth = $('.overlay').width(),
		windowHeight = $(window).height(),
		infoWidth = $('.info').width(),
		infoHeight = $('.info').height(),
		leftMove = overlayWidth/2 - infoWidth/2,
		topMove = windowHeight/2 - infoHeight/2 ;


	$('.content .circle').on('click', function(event){
		event.preventDefault();

		$('.content').find('.overlay').css('visibility', 'visible');
		$('.info').css({'visibility': 'hidden'});
		$(this).next('.info').css({'visibility': 'visible', 'left': leftMove, 'top': topMove });

		facebookLink($(this));
		closeOverlay();
	});

}

function closeOverlay() {

	$('.overlay').on('click', function() {
		$('.info').css('visibility', 'hidden');
		$('.overlay').css('visibility', 'hidden');
	});

	$('.close').on('click', function() {
		$('.info').css('visibility', 'hidden');
		$('.overlay').css('visibility', 'hidden');
	});

}

function facebookLink(el) {
	el.next('.info').find('.facebook').on('click', function() {
        var data =  $(this).data(),
            obj = {
                method:'feed',
                link: data.link,
                picture: data.picture,
                name: data.name,
                caption:'Newsweek',
                description: data.description
            };

		console.log(data);
        FB.ui(obj, function(){});
    });
}

