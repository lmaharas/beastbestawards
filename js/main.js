(function() {
    "use strict";

    var overlayOpen = false,
        aboutOpen = true,
        currentState = "all";

    function cacheOverlayImg(el){
        var $el = $(el),
            parent = $el.parent(),
            data = $el.data(),
            lgImg = data.lgimage;

        $('<img/>')[0].src = lgImg;
  
    }

    function loadOverlayImg(className) {

        var imgClass = className.match("^web") ? 'rect' : 'circle',
            imgSrc = $('.' + className).data('lgimage'),
            imgMarkup = '<img class="' + imgClass + '" src="' + imgSrc + '"/>';

        $('.' + className + ' .main .image').html(imgMarkup);

    }

    function searchKeyDown(keyPressed) {

        if (keyPressed.keyCode === 13) {
            window.location.hash = $('.search-field').attr('data-link');
        }

    }

    function searchAutoComplete(items) {
        var $searchField = $('.search-field');

        $searchField.autocomplete({
          source: items,
          focus: function( event, ui ) {
            $searchField.val( ui.item.label );
            return false;
          },
          select: function( event, ui ) {
            $searchField.val( ui.item.label );
            $searchField.attr('data-link', ui.item.link);

            if(overlayOpen && window.location.hash !== '#' + ui.item.link) {
                closeOverlay();
            }

            window.location.hash = ui.item.link;
            return false;
          }
        });

    }

    function showFilters(section) {
        var duration = 300,
            $nav = $('.nav'),
            $filter = $nav.find('.' + section + '.dropdown').filter(':hidden');

        if(section === 'all') {
            $nav.find('.dropdown').slideUp(duration);

        } else if( $filter.length !== 0 ) {
            $nav.find('.dropdown').filter(':visible').slideUp(duration);
            $filter.stop().slideDown(duration);

        }

    }

    function showAbout() {
        $('.about-popup').addClass('open');
        aboutOpen = true;
    }

    function hideAbout() {
        $('.about-popup').removeClass('open');
        aboutOpen = false;
    }

    function showContent(section) {
        var $content = $('.content');
        if(section === 'all'){
            $content.find('.twitter').show();
            $content.find('.web').show();
            $(window).scroll();
        } else {
            $content.find("ul").hide();
            $content.find('.' + section).show();
        }
    }

    function centerOverlay(overlayId) {
        var navWidth = $('.nav').width(),
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            infoWidth = windowWidth > 500 ? 380 : windowWidth * .7,
            infoHeight = $('.' + overlayId).height(),
            leftMove = (windowWidth - navWidth)/2 - infoWidth/2,
            topMove = windowHeight/2 - infoHeight/ 2;   

        
        $('.content').find('.overlay').find('.' + overlayId).css({'left': leftMove + navWidth, 'top': topMove });
        $('.content').find('.overlay').css({ 'left': navWidth });

        if (!overlayOpen) {
            openOverlay(overlayId);
        }

    }


    function openOverlay(overlayId) {
        var $overlay = $('.content').find('.overlay'),
            $overlayItem = $overlay.find('.' + overlayId);      

        $overlayItem.show();
        $overlay.show();
        overlayOpen = true;
    }

    function closeOverlay() {
        $('.info').hide();
        $('.overlay').hide();
        overlayOpen = false;
    }

    function fbInit() {
        $.ajaxSetup({ cache: true });
        $.getScript('//connect.facebook.net/en_US/all.js', function() {
            window.fbAsyncInit = function() {
                FB.init({
                  appId: '475320612543167'
                });
            };
        });
    }

    function facebookLink($el) {

        var data =  $el.data(),
            obj = {
                method:'feed',
                link: data.link,
                picture: data.picture,
                name: data.name,
                caption:'The Daily Beast',
                description: data.description
            };

        FB.ui(obj, function(){});
    }

    function initIsotope() {
        $(".content").find('.web, .twitter').isotope({
            // options
            itemSelector : '.bubble',
            layoutMode : 'masonry'
        });
    }

    function filterIsotope($el, category) {
        var selector = '.' + category;
        selector = selector === '.web' || selector === '.twitter' ? '*' : selector;
        $el.isotope({ filter: selector });
    }

    function highlightFilter(category) {
        var $filter = $('.nav a[href=#' + category + ']');
        if($filter.length !== 0) {
            $('.nav a.active').removeClass('active');
            $filter.addClass('active');
        }
    }

    function switchSection(section) {
        showFilters(section);
        showContent(section);
    }


    function handleHash() {
        var separator = '-',
        hash = window.location.hash ? window.location.hash.substr(1) : currentState,
        parts = hash.split(separator),
        section;

        if(overlayOpen) {
            closeOverlay();
        }

        if(parts.length >= 1) {
            section = parts[0];
            switchSection(section);
        }

        if (parts.length === 3){
            //show item
            loadOverlayImg(hash);
            centerOverlay(hash);
            hideAbout();

        } else if(parts.length >= 1) {
            //filter
            filterIsotope($('.content').find('.' + section), hash);
            highlightFilter(hash);

            currentState = hash;
        }
    }

    function bindEvents() {

        $('.bubble').on('mouseenter', function() {
            cacheOverlayImg(this);
        });

        $('.search-field').focus( function() {

            if ($(this).val() === $(this)[0].title){
                $(this).removeClass("active");
                $(this).val("");
            }

        });

        $('.search-field').blur( function() {

            if ($(this).val() === ""){
                $(this).addClass("active");
                $(this).val($(this)[0].title);
            }

        });

        $('.search-field').on('keydown', function(event) {
            searchKeyDown(event);
        });

        $('.overlay').on('click', function() {
            closeOverlay();
            window.location.hash = currentState;
        });

        $('.info').on('click', function(e){
            e.stopPropagation();
        });

        $('.info .close').on('click', function(e) {
            e.preventDefault();
            closeOverlay();
            window.location.hash = currentState;
        });

        $('.about-popup .close').on('click', function(e) {
            e.preventDefault();
            hideAbout();
        });

        $('.dropdown li').on('click', function(){
            window.location.hash = $(this).attr('href');
        });

        $('.heading.about a').on('click', function(e){
            e.preventDefault();
            if(!aboutOpen){
                showAbout();
            } else {
                hideAbout();
            }
        });

        $('.logo').on('click', function(){
            showAbout();
        });

        $('.facebook-link').on('click', function(e) {
            e.preventDefault();
            facebookLink($(this));
        });

        $('.twitter-link').on('click', function(e){
            e.preventDefault();
            var href = $(this).attr('href'),
                leftPos = e.pageX - 400,
                topPos = e.pageY - 350,
                settings = 'width=500,height=300,top=' + topPos + ',left=' + leftPos + ',scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';         
            window.open(href, 'Tweet', settings);
        });


        $(window).on('hashchange', function(){
            handleHash();
        });

        $(window).resize(function () {
            var hash = window.location.hash ? window.location.hash.substr(1) : currentState;
            
            if(overlayOpen) {
                centerOverlay(hash);
            }

        });

    }

    function loadBody() {

        $.getJSON("data.json", function(data){

            dust.render("body", data, function(err, out) {

                $("body").html(out);

                showAbout();
                bindEvents();
                initIsotope();
                handleHash();
                searchAutoComplete(data.autocomplete);

            });
        });
    }

    $(document).ready(function() {
        loadBody();
        fbInit();
    });
}());

