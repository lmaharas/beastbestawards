(function() {
    "use strict";

    var overlayOpen = false,
        aboutOpen = true,
        currentState = "web";

    function showFilters(section) {
        var duration = 300,
            $nav = $('.nav'),
            $filter =   $nav.find('.' + section + '.dropdown').filter(':hidden');
        if($filter.length !== 0) {
            $nav.find('.dropdown').filter(':visible').slideUp(duration);
            $filter.stop().slideDown(duration);
        }
    }

    function showAbout() {
        $('.wrapper').addClass('open');
        aboutOpen = true;
    }

    function hideAbout() {
        $('.wrapper').removeClass('open');
        aboutOpen = false;
    }

    function showContent(section) {
        var $content = $('.content');
        $content.find("ul").hide();
        $content.find('.' + section).show();
    }

    function openOverlay(overlayId) {
        var overlayWidth = $('.overlay').width(),
            windowHeight = $(window).height(),
            infoWidth = $('.info').width(),
            infoHeight = $('.info').height(),
            leftMove = overlayWidth/2 - infoWidth/2,
            topMove = windowHeight/2 - infoHeight/ 2,
            $overlay = $('.content').find('.overlay'),
            $overlayItem = $overlay.find('.' + overlayId);

        $overlay.css('visibility', 'visible');
        $overlayItem.css({'visibility': 'visible', 'left': leftMove, 'top': topMove });
        overlayOpen = true;
    }

    function closeOverlay() {
        $('.info').css('visibility', 'hidden');
        $('.overlay').css('visibility', 'hidden');
        overlayOpen = false;

        window.location.hash = currentState;
    }

    function fbInit(){
        $.ajaxSetup({ cache: true });
        $.getScript('//connect.facebook.net/en_US/all.js', function(){
          window.fbAsyncInit = function() {
            FB.init({
              appId: '475320612543167'
              // channelUrl: '//yourapp.com/channel.html',
            });       
            
             $('.facebook-link').on('click', function(e) {
                e.preventDefault();
                facebookLink($(this));
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

        console.log(selector);
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
            openOverlay(hash);

            currentState = parts[0] + separator + parts[1];
        } else if(parts.length >= 1) {

            //filter
            filterIsotope($('.content').find('.' + section), hash);
            highlightFilter(hash);

            currentState = hash; 
        }
    }

    function bindEvents() {
        $('.overlay').on('click', function() {
            closeOverlay();
        });

        $('.info .close').on('click', function(e) {
            e.preventDefault();
            closeOverlay();
        });

        $('.about-popup .close').on('click', function(e) {
            e.preventDefault();
            hideAbout();
        });

    
        $('.heading.about a').on('click', function(e){
            e.preventDefault();
            if(!aboutOpen){
                showAbout();
            }else{
                hideAbout();
            }
        });



        $(window).on('hashchange', function(){
            handleHash();
        });
    }

    function loadBody() {
        fbInit();
        $.getJSON("data.json", function(data){
            //console.log(data);

            dust.render("body", data, function(err, out) {
                $("body").html(out);

                bindEvents();
                initIsotope();
                handleHash();
                showAbout();
            });
        });
    }

    $(document).ready(function() {
        loadBody();
    });
}());

