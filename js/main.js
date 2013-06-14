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
            // closeOverlay();
        }


        if(parts.length >= 1) {
            section = parts[0];
            switchSection(section);
        }

        

        if (parts.length === 3){
            //show item
            openOverlay(hash);
            hideAbout();

        } else if(parts.length >= 1) {

            //filter
            filterIsotope($('.content').find('.' + section), hash);
            highlightFilter(hash);

            currentState = hash; 
        }
    }

    var isLink = false;
    function bindEvents() {
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

    
        $('.heading.about a').on('click', function(e){
            e.preventDefault();
            if(!aboutOpen){
                showAbout();
            } else {
                hideAbout();
            }
        });

        $('.logo').on('click', function(e){
            showAbout();
        });

        $('.twitter-link').on('click', function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            var leftPos = e.pageX + 400;
            var topPos = e.pageY;
            var settings = 'width=500,height=400,top=' + topPos + ',left=' + leftPos + ',scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';
            
            window.open(href, 'Tweet', settings)
        });


        $(window).on('hashchange', function(){
            handleHash();
        });
    }
    // function dustHelpers(){
    //     dust.helpers.formatCategory = function (chunk, context, bodies, params) {
    //         var str = dust.helpers.tap(params.str, chunk, context);
    //         console.log(str)
    //         // return chunk.write(date + '.' + month + '.' + year);
    //     };

    // }

    function loadBody() {
        fbInit();
        $.getJSON("data.json", function(data){
            //console.log(data);

            // dustHelpers();
            dust.render("body", data, function(err, out) {

                $("body").html(out);

                showAbout();
                bindEvents();
                initIsotope();
                handleHash();
            });
        });
    }

    $(document).ready(function() {
        loadBody();
    });
}());

