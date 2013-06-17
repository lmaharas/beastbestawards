(function() {
    "use strict";

    var autocomplete_data = 
    [
        {
            label: "Elizabeth Windsor, @Queen_UK",
            link: "twitter-parody-elizabethwindsor"
        },
        {
            label: "Aaron Levie, @levie",
            link: "twitter-tech-aaronlevie"
        },
        {
            label: "Aaron Paul, @aaronpaul_8",
            link: "twitter-celebrity-aaronpaul"
        },
        {
            label: "Adam Platt, @plattypants",
            link: "twitter-food-adamplatt"
        },
        {
            label: "Alain de Botton, @alaindebotton",
            link: "twitter-books-alaindebotton"
        },
        {
            label: "Alex Baze, @bazecraze",
            link: "twitter-humor-alexbaze"
        },
        {
            label: "Alexia Tsotsis, @alexia",
            link: "twitter-tech-alexiatsotsis"
        },
        {
            label: "Amal Ghandour, @amalghandour",
            link: "twitter-international-amalghandour"
        },
        {
            label: "Amanda Hesser, @amandahesser",
            link: "twitter-food-amandahesser"
        },
        {
            label: "Amanda Marcotte, @AmandaMarcotte",
            link: "twitter-womensissues-amandamarcotte"
        },
        {
            label: "Andrew Kaczynski, @BuzzFeedAndrew",
            link: "twitter-politics-andrewkaczynski"
        },
        {
            label: "Andrew W.K., @AndrewWK",
            link: "twitter-celebrity-andrewwk"
        },
        {
            label: "Anonymous, @YourAnonNews",
            link: "twitter-news-anonymous"
        },
        {
            label: "Anthony De Rosa, @AntDeRosa",
            link: "twitter-news-anthonyderosa"
        },
        {
            label: "Bacon Salt, @BaconSalt",
            link: "twitter-companies-baconsalt"
        },
        {
            label: "Baseball America, @BaseballAmerica",
            link: "twitter-sports-baseballamerica"
        },
        {
            label: "Ben Schwartz, @rejectedjokes",
            link: "twitter-celebrity-benschwartz"
        },
        {
            label: "Ben White, @morningmoneyben",
            link: "twitter-business-benwhite"
        },
        {
            label: "Billy Eichner, @billyeichner",
            link: "twitter-humor-billyeichner"
        },
        {
            label: "Blake Shelton, @blakeshelton",
            link: "twitter-celebrity-blakeshelton"
        },
        {
            label: "Breaking News, @BreakingNews",
            link: "twitter-news-breakingnews"
        },
        {
            label: "Bruce Bartlett, @BruceBartlett",
            link: "twitter-business-brucebartlett"
        },
        {
            label: "Chart News, @chartnews",
            link: "twitter-entertainment-chartnews"
        },
        {
            label: "Chris Dixon, @cdixon",
            link: "twitter-tech-chrisdixon"
        },
        {
            label: "Chris Hadfield, @Cmdr_Hadfield",
            link: "twitter-healthscience-chrishadfield"
        },
        {
            label: "Chris Hayes, @chrislhayes",
            link: "twitter-politics-chrishayes"
        },
        {
            label: "Chrissy Teigen, @chrissyteigen",
            link: "twitter-celebrity-chrissyteigen"
        },
        {
            label: "Colin Meloy, @colinmeloy",
            link: "twitter-celebrity-colinmeloy"
        },
        {
            label: "David Chang, @davidchang",
            link: "twitter-food-davidchang"
        },
        {
            label: "David J. Roth, @david_j_roth",
            link: "twitter-sports-davidjroth"
        },
        {
            label: "Dennis Rodman, @dennisrodman",
            link: "twitter-celebrity-dennisrodman"
        },
        {
            label: "Downtown Josh Brown, @ReformedBroker",
            link: "twitter-business-downtownjoshbrown"
        },
        {
            label: "Eric Topol, @EricTopol",
            link: "twitter-healthscience-erictopol"
        },
        {
            label: "Errol Morris, @errolmorris",
            link: "twitter-entertainment-errolmorris"
        },
        {
            label: "Ezra Koenig of Vampire Weekend, @arzE",
            link: "twitter-celebrity-ezrakoenigofvampireweekend"
        },
        {
            label: "Felix Salmon, @felixsalmon",
            link: "twitter-business-felixsalmon"
        },
        {
            label: "Florida Man, @_FloridaMan",
            link: "twitter-humor-floridaman"
        },
        {
            label: "Hari Kunzru, @harikunzru",
            link: "twitter-books-harikunzru"
        },
        {
            label: "Harvard Health, @HarvardHealth",
            link: "twitter-healthscience-harvardhealth"
        },
        {
            label: "Hillary Clinton, @HillaryClinton",
            link: "twitter-politics-hillaryclinton"
        },
        {
            label: "Hugh Acheson, @HughAcheson",
            link: "twitter-food-hughacheson"
        },
        {
            label: "Hunter Walk, @hunterwalk",
            link: "twitter-tech-hunterwalk"
        },
        {
            label: "IDF Spokesperson, @IDFSpokesperson",
            link: "twitter-international-idfspokesperson"
        },
        {
            label: "James Poniewozik, @poniewozik",
            link: "twitter-entertainment-jamesponiewozik"
        },
        {
            label: "Jason Good, @jasonmgood",
            link: "twitter-family-jasongood"
        },
        {
            label: "Jay Horwitz, @Jay_HorwitzPR",
            link: "twitter-sports-jayhorwitz"
        },
        {
            label: "Jenna Wortham, @jennydeluxe",
            link: "twitter-tech-jennawortham"
        },
        {
            label: "Jenni Konner, @campsucks",
            link: "twitter-humor-jennikonner"
        },
        {
            label: "Jenny Johnson, @JennyJohnsonHi5",
            link: "twitter-humor-jennyjohnson"
        },
        {
            label: "Jessica Valenti, @JessicaValenti",
            link: "twitter-womensissues-jessicavalenti"
        },
        {
            label: "John Jannuzzi, @johnjannuzzi",
            link: "twitter-style-johnjannuzzi"
        },
        {
            label: "Jon Hendren, @fart",
            link: "twitter-humor-jonhendren"
        },
        {
            label: "Jonathan Capehart, @CapehartJ",
            link: "twitter-politics-jonathancapehart"
        },
        {
            label: "Jose Canseco, @JoseCanseco",
            link: "twitter-celebrity-josecanseco"
        },
        {
            label: "Julie Klausner, @julieklausner",
            link: "twitter-humor-julieklausner"
        },
        {
            label: "Katie Baker, @katiebakes",
            link: "twitter-sports-katiebaker"
        },
        {
            label: "Katie Grand, @kegrand",
            link: "twitter-style-katiegrand"
        },
        {
            label: "Kim Jong Number Un, @KimJongNumberUn",
            link: "twitter-parody-kimjongnumberun"
        },
        {
            label: "Laura Brown, @laurabrown99",
            link: "twitter-style-laurabrown"
        },
        {
            label: "Laura Rozen, @lrozen",
            link: "twitter-international-laurarozen"
        },
        {
            label: "Liz Gumbinner, @Mom101",
            link: "twitter-family-lizgumbinner"
        },
        {
            label: "Maggie Haberman , @maggiepolitico",
            link: "twitter-politics-maggiehaberman"
        },
        {
            label: "Matt Zoller Seitz, @mattzollerseitz",
            link: "twitter-entertainment-mattzollerseitz"
        },
        {
            label: "Michael Voltaggio, @MVoltaggio",
            link: "twitter-food-michaelvoltaggio"
        },
        {
            label: "Molly Ball, @mollyesque",
            link: "twitter-politics-mollyball"
        },
        {
            label: "Nervana Mahmoud, @Nervana_1",
            link: "twitter-international-nervanamahmoud"
        },
        {
            label: "New Scientist, @newscientist",
            link: "twitter-healthscience-newscientist"
        },
        {
            label: "Not Will Ferrell, @itsWillyFerrell",
            link: "twitter-parody-notwillferrell"
        },
        {
            label: "Old Spice, @OldSpice",
            link: "twitter-companies-oldspice"
        },
        {
            label: "Olivia Wilde, @oliviawilde",
            link: "twitter-celebrity-oliviawilde"
        },
        {
            label: "Paul Feig, @paulfeig",
            link: "twitter-entertainment-paulfeig"
        },
        {
            label: "Phil Jackson, @PhilJackson11",
            link: "twitter-sports-philjackson"
        },
        {
            label: "Playground Dad, @playgrounddad",
            link: "twitter-family-playgrounddad"
        },
        {
            label: "Pocket Hits, @PocketHits",
            link: "twitter-news-pockethits"
        },
        {
            label: "Rob Delaney, @robdelaney",
            link: "twitter-humor-robdelaney"
        },
        {
            label: "Robert A George , @RobGeorge",
            link: "twitter-politics-robertageorge"
        },
        {
            label: "Robert Costa, @robertcostaNRO",
            link: "twitter-politics-robertcosta"
        },
        {
            label: "RuPaul, @RuPaul",
            link: "twitter-celebrity-rupaul"
        },
        {
            label: "Ruby Cramer , @rubycramer",
            link: "twitter-politics-rubycramer"
        },
        {
            label: "Sallie Krawcheck, @SallieKrawcheck",
            link: "twitter-business-salliekrawcheck"
        },
        {
            label: "Sarah Dessen, @sarahdessen",
            link: "twitter-books-sarahdessen"
        },
        {
            label: "Sarah Weinman, @sarahw",
            link: "twitter-entertainment-sarahweinman"
        },
        {
            label: "Sesame Street, @sesamestreet",
            link: "twitter-companies-sesamestreet"
        },
        {
            label: "Shankar Vedantam, @HiddenBrain",
            link: "twitter-healthscience-shankarvedantam"
        },
        {
            label: "Sherman Alexie, @Sherman_Alexie",
            link: "twitter-books-shermanalexie"
        },
        {
            label: "Stefanie Wilder Taylor, @SWilderTaylor",
            link: "twitter-family-stefaniewildertaylor"
        },
        {
            label: "Steve Case, @SteveCase",
            link: "twitter-business-stevecase"
        },
        {
            label: "The Daddy Complex, @thedaddycomplex",
            link: "twitter-family-thedaddycomplex"
        },
        {
            label: "Tim Marchman, @timmarchman",
            link: "twitter-sports-timmarchman"
        },
        {
            label: "Tracie Egan Morissey, @jezebel_tracie",
            link: "twitter-womensissues-tracieeganmorissey"
        },
        {
            label: "Vital Voices, @VitalVoices",
            link: "twitter-womensissues-vitalvoices"
        },
        {
            label: "Will McAvoy, @WillMcAvoyACN",
            link: "twitter-parody-willmcavoy"
        },
        {
            label: "Wiz Khalifa, @wizkhalifa",
            link: "twitter-celebrity-wizkhalifa"
        },
        {
            label: "Women for Women International, @WomenforWomen",
            link: "twitter-womensissues-womenforwomeninternational"
        },
        {
            label: "Your Life Coaches, @LIFECOACHER",
            link: "twitter-humor-yourlifecoaches"
        },
        {
            label: "100 Percent Men, @100PercentMen",
            link: "web-tumblr-100percentmen"
        },
        {
            label: "99U, @99u",
            link: "web-brainfood-99u"
        },
        {
            label: "AbandonedNYC, @abandonednyc",
            link: "web-randomfun-abandonednyc"
        },
        {
            label: "Arts & Letters Daily, @aldaily",
            link: "web-reading-artslettersdaily"
        },
        {
            label: "Artsy, @artsy",
            link: "web-artstyle-artsy"
        },
        {
            label: "Atavist, @theatavist",
            link: "web-reading-atavist"
        },
        {
            label: "BackBid, @BackBid",
            link: "web-travelfood-backbid"
        },
        {
            label: "Bad Kids Jokes, Bad Kids Jokes'",
            link: "web-tumblr-badkidsjokes"
        },
        {
            label: "Bloesem, @bloesemblog Kids",
            link: "web-parenting-bloesem"
        },
        {
            label: "Brain Pickings , @brainpickings",
            link: "web-brainfood-brainpickings"
        },
        {
            label: "Camera Awesome, @awesomize",
            link: "web-apps-cameraawesome"
        },
        {
            label: "CR Fashion Book, @CRFASHIONBOOK",
            link: "web-artstyle-crfashionbook"
        },
        {
            label: "Curisma, @curisma_daily",
            link: "web-tech-curisma"
        },
        {
            label: "DadWagon, @dadwagon",
            link: "web-parenting-dadwagon"
        },
        {
            label: "DailyLit, @DailyLit",
            link: "web-reading-dailylit"
        },
        {
            label: "DatPiff, @DatPiff",
            link: "web-sportsentertainment-datpiff"
        },
        {
            label: "Dinner: A Love Story, @dinnerlovestory",
            link: "web-parenting-dinneralovestory"
        },
        {
            label: "Dlisted, @itsdlisted",
            link: "web-sportsentertainment-dlisted"
        },
        {
            label: "Doom & Gloom From the Tomb, Doom & Gloom From the Tomb'",
            link: "web-tumblr-doomgloomfromthetomb"
        },
        {
            label: "Dots, @playdots",
            link: "web-apps-dots"
        },
        {
            label: "Eat Your Books, @EatYourBooks",
            link: "web-travelfood-eatyourbooks"
        },
        {
            label: "Elbows, @elbows",
            link: "web-sportsentertainment-elbows"
        },
        {
            label: "Etymonline , Etymonline ",
            link: "web-brainfood-etymonline"
        },
        {
            label: "Evernote Food, @EvernoteFood",
            link: "web-apps-evernotefood"
        },
        {
            label: "Fantastical, @flexibits",
            link: "web-apps-fantastical"
        },
        {
            label: "FindTheBest, @FindTheBest",
            link: "web-shopping-findthebest"
        },
        {
            label: "Flavorwire, @flavorwire",
            link: "web-sportsentertainment-flavorwire"
        },
        {
            label: "Foodie, @FoodieByGlam",
            link: "web-travelfood-foodie"
        },
        {
            label: "Foodily, @FOODILY",
            link: "web-travelfood-foodily"
        },
        {
            label: "Foodspotting, @foodspotting",
            link: "web-travelfood-foodspotting"
        },
        {
            label: "Futility Closet, futilitycloset.com",
            link: "web-brainfood-futilitycloset"
        },
        {
            label: "GeoGuesser, %23GeoGuesser",
            link: "web-randomfun-geoguesser"
        },
        {
            label: "Grubwithus, @Grubwithus",
            link: "web-travelfood-grubwithus"
        },
        {
            label: "Hacker News, Hacker News'",
            link: "web-tech-hackernews"
        },
        {
            label: "HitFix, @HitFix",
            link: "web-sportsentertainment-hitfix"
        },
        {
            label: "Houzz, @houzz",
            link: "web-artstyle-houzz"
        },
        {
            label: "I Love Charts, @ilovecharts",
            link: "web-tumblr-ilovecharts"
        },
        {
            label: "Iconic Photos, @aalholmes",
            link: "web-photography-iconicphotos"
        },
        {
            label: "Into The Gloss, @IntoTheGloss",
            link: "web-artstyle-intothegloss"
        },
        {
            label: "Lil Bub, @IAMLILBUB",
            link: "web-tumblr-lilbub"
        },
        {
            label: "Machinarium , Machinarium",
            link: "web-apps-machinarium"
        },
        {
            label: "Maddie on Things, Maddie on Things'",
            link: "web-tumblr-maddieonthings"
        },
        {
            label: "Makers, @MAKERSwomen",
            link: "web-randomfun-makers"
        },
        {
            label: "Me & My Shadow, myshadow.org",
            link: "web-randomfun-memyshadow"
        },
        {
            label: "Medium , @medium",
            link: "web-reading-medium"
        },
        {
            label: "Menswear Dog, @Mensweardog",
            link: "web-tumblr-mensweardog"
        },
        {
            label: "Moda Operandi, @modaoperandi",
            link: "web-shopping-modaoperandi"
        },
        {
            label: "Momfilter, @Momfilter",
            link: "web-parenting-momfilter"
        },
        {
            label: "Nah Right, @nahright",
            link: "web-sportsentertainment-nahright"
        },
        {
            label: "Newsmap, @therealnewsmap",
            link: "web-randomfun-newsmap"
        },
        {
            label: "NPR's The Picture Show, @NPRPictureShow",
            link: "web-photography-nprsthepictureshow"
        },
        {
            label: "Of a Kind, @ofakind",
            link: "web-shopping-ofakind"
        },
        {
            label: "PaperKarma , @PaperKarma",
            link: "web-apps-paperkarma"
        },
        {
            label: "Parent Hacks, @parenthacks",
            link: "web-parenting-parenthacks"
        },
        {
            label: "PolitiFact, @politifact",
            link: "web-politics-politifact"
        },
        {
            label: "Prison Photography, @brookpete",
            link: "web-photography-prisonphotography"
        },
        {
            label: "Public Books, @publicbooks",
            link: "web-reading-publicbooks"
        },
        {
            label: "Put This On, @putthison",
            link: "web-artstyle-putthison"
        },
        {
            label: "Reddit Politics, @Reddit Politics",
            link: "web-politics-redditpolitics"
        },
        {
            label: "Sabato's Crystal Ball, @larrysabato",
            link: "web-politics-sabatoscrystalball"
        },
        {
            label: "Shoptiques, @shoptiques",
            link: "web-shopping-shoptiques"
        },
        {
            label: "The Skeptic's Dictionary, @RobertTCarroll",
            link: "web-brainfood-theskepticsdictionary"
        },
        {
            label: "Small Demons, @smalldemons",
            link: "web-reading-smalldemons"
        },
        {
            label: "Switchcam, @switchcam",
            link: "web-sportsentertainment-switchcam"
        },
        {
            label: "Taegan Goddard's Political Wire, @politicalwire",
            link: "web-politics-taegangoddardspoliticalwire"
        },
        {
            label: "The Classical, @Classical",
            link: "web-sportsentertainment-theclassical"
        },
        {
            label: "The Orchestra, @touchpress",
            link: "web-apps-theorchestra"
        },
        {
            label: "The RealReal, @therealreal",
            link: "web-shopping-therealreal"
        },
        {
            label: "The Selby, @theselby",
            link: "web-artstyle-theselby"
        },
        {
            label: "The Spectator Archive, @spectator",
            link: "web-reading-thespectatorarchive"
        },
        {
            label: "The Waste Land, The Waste Land'",
            link: "web-apps-thewasteland"
        },
        {
            label: "The Weight of Objects, @weightofobjects",
            link: "web-tumblr-theweightofobjects"
        },
        {
            label: "TouchOfModern, @TouchofModern",
            link: "web-shopping-touchofmodern"
        },
        {
            label: "TourWrist, @TourWrist",
            link: "web-photography-tourwrist"
        },
        {
            label: "Turntable , @turntablefm",
            link: "web-sportsentertainment-turntable"
        },
        {
            label: "Valleywag , @Valleywag",
            link: "web-tech-valleywag"
        },
        {
            label: "Wantful, @Wantful",
            link: "web-shopping-wantful"
        },
        {
            label: "We the People, We the People'",
            link: "web-politics-wethepeople"
        },
        {
            label: "Weigel, @daveweigel",
            link: "web-politics-weigel"
        },
        {
            label: "Wondermind, @Tate",
            link: "web-parenting-wondermind"
        },
        {
            label: "You Are Blind, youareblind.com",
            link: "web-brainfood-youareblind"
        },
        {
            label: "Unz, Unz.org",
            link: "web-reading-unz"
        }
    ];
    
    var overlayOpen = false,
        aboutOpen = true,
        currentState = "all";

    function showFilters(section) {
        var duration = 300,
            $nav = $('.nav'),
            $filter =   $nav.find('.' + section + '.dropdown').filter(':hidden');
        if(section == 'all'){
            $nav.find('.dropdown').slideUp(duration);
        }else{
            if($filter.length !== 0) {
                $nav.find('.dropdown').filter(':visible').slideUp(duration);
                $filter.stop().slideDown(duration);
            }
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
        if(section == 'all'){
            $content.find('.twitter').show();
            $content.find('.web').show();
            window.scrollTo(0);
        }else{
            $content.find("ul").hide();
            $content.find('.' + section).show();
        }
    }

    function openOverlay(overlayId) {
        var overlayWidth = $('.overlay').width(),
            windowHeight = $(window).height(),
            $overlay = $('.content').find('.overlay'),
            $overlayItem = $overlay.find('.' + overlayId),
            $img_placeholder = $overlayItem.find('.img-placeholder'),
            img_src = $img_placeholder.data('src'),
            img_shape = $img_placeholder.data('shape');

        var item_img = '<img width="380" height="275" class="added-detail-img '+img_shape+'" src="'+img_src+'" />'
        var image = new Image();
            image.src = img_src;

        $img_placeholder.html(item_img);

        var infoWidth = $('.info').width(),
            infoHeight = $('.info').height(),
            leftMove = overlayWidth/2 - infoWidth/2,
            topMove = windowHeight/2 - infoHeight/ 2;

        $overlayItem.css({'display': 'block', 'left': leftMove, 'top': topMove });
        $overlay.css('display', 'block');
        $overlayItem.addClass('three-deeee');
        overlayOpen = true;
    }

    function closeOverlay() {
        $('.added-detail-img').remove();
        $('.info').css('display', 'none');
        $('.overlay').css('display', 'none');
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
            closeOverlay();
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

        $('.dropdown li').on('click', function(e){
            var filter_by = $(this).find('a').attr('href');
            window.location.hash = filter_by;
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
            var leftPos = e.pageX - 400;
            var topPos = e.pageY - 350;
            var settings = 'width=500,height=300,top=' + topPos + ',left=' + leftPos + ',scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';
            
            window.open(href, 'Tweet', settings)
        });

        $('.heading.web a').click(function(){
            $('.buffered-object').addClass('social-buffer');
        });

        $('.heading.twitter a').click(function(){
            $('.buffered-object').removeClass('social-buffer');
        })


        $(window).on('hashchange', function(){
            handleHash();
        });

        /* Clears textfields from helper text on click */
        var $textfield = $('.search-field');

        $textfield.autocomplete({
          source: autocomplete_data,
          focus: function( event, ui ) {
            $textfield.val( ui.item.label );
            return false;
          },
          select: function( event, ui ) {
            $textfield.val( ui.item.label );
            $textfield.attr('data-link', ui.item.link)

            if(overlayOpen && window.location.hash != '#'+ui.item.link) {
                closeOverlay();
            }

            window.location.hash = ui.item.link;
            return false;
          }
        });

        $textfield.focus(function(srcc){
            if ($(this).val() == $(this)[0].title){
                $(this).removeClass("search-field-active");
                $(this).val("");
            }
        });

        $textfield.blur(function(){
            if ($(this).val() == ""){
                $(this).addClass("search-field-active");
                $(this).val($(this)[0].title);
            }
        });

        $textfield.blur();

        $textfield.on('keydown', function (e) {
            if (e.keyCode == 13){
                var link = $(this).attr('data-link');
                window.location.hash = link;
            }
        });

    }
    // function stickCreditsToBottom(){
    //     var h = $(window).height();
    //     var c = '<div style="height:'+h+'px;" class="the-credits"><div class="credit-text"><p><strong>Credits</strong>: Research by Lauren Streib; Design by Bronson Stamp; Built by Lynn Maharas, Andrew Sprouse & Michael Keller.</p></div></div>';
    //     $('body').append(c);
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
                // stickCreditsToBottom();
            });
        });
    }

    $(document).ready(function() {
        loadBody();
    });
}());

