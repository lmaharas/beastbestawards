(function(){dust.register("analytics",body_0);function body_0(chk,ctx){return chk.write("<!-- crazyEgg --><script type=\"text/javascript\">    setTimeout(function(){var a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\")[0];a.src=document.location.protocol+\"//dnn506yrbagrg.cloudfront.net/pages/scripts/0013/8759.js?\"+Math.floor(new Date().getTime()/3600000);a.async=true;a.type=\"text/javascript\";b.parentNode.insertBefore(a,b)}, 1);</script><!-- SiteCatalyst --><script language=\"JavaScript\" type=\"text/javascript\" src=\"js/s_code.js\"></script><script language=\"JavaScript\" type=\"text/javascript\"><!--s.pageName = s.prop1 = \"Beast Best Awards\";/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/var s_code = s.t();if (s_code)document.write(s_code)//--></script><script language=\"JavaScript\" type=\"text/javascript\"><!--if (navigator.appVersion.indexOf('MSIE') >= 0)document.write(unescape('%3C') + '\\!-' + '-')//--></script><noscript><img src=\"http://rtst.122.2o7.net/b/ss/rtstinteractive/1/H.26--NS/0\"height=\"1\" width=\"1\" border=\"0\" alt=\"\"/></noscript><!--/DO NOT REMOVE/--><!-- End SiteCatalyst code version: H.26.0. -->");}return body_0;})();
(function(){dust.register("body",body_0);function body_0(chk,ctx){return chk.partial("nav",ctx,null).write("<section class=\"content\"><div class=\"overlay\">").section(ctx.getPath(false,["twitter","items"]),ctx,{"block":body_1},null).section(ctx.getPath(false,["web","items"]),ctx,{"block":body_2},null).write("</div><ul class=\"twitter clearfix\">").section(ctx.get("twitter"),ctx,{"block":body_3},null).write("</ul><ul class=\"web clearfix\">").section(ctx.get("web"),ctx,{"block":body_4},null).write("</ul>  </section>").partial("facebook",ctx,null).partial("analytics",ctx,null).write("  ");}function body_1(chk,ctx){return chk.partial("overlayitem",ctx,null).write("            ");}function body_2(chk,ctx){return chk.partial("overlayitem",ctx,null).write("            ");}function body_3(chk,ctx){return chk.partial("item",ctx,null).write("            ");}function body_4(chk,ctx){return chk.partial("item",ctx,null).write("            ");}return body_0;})();
(function(){dust.register("facebook",body_0);function body_0(chk,ctx){return chk.write("<!-- facebook --><script type=\"text/javascript\" src='http://connect.facebook.net/en_US/all.js'>function() {FB.init({appId:'189930913679',status:true,cookie:true,xfbml:true});});</script>");}return body_0;})();
(function(){dust.register("item",body_0);function body_0(chk,ctx){return chk.section(ctx.get("items"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write(" <li class=\"bubble ").reference(ctx.get("categoryId"),ctx,"h").write("\"><a class=\"circle\" href=\"#").reference(ctx.get("id"),ctx,"h").write("\"><img src=\"").reference(ctx.get("imgPath"),ctx,"h").write("\"><h3 class=\"title\">").exists(ctx.get("tweet"),ctx,{"else":body_2,"block":body_3},null).write("</h3></a></li>");}function body_2(chk,ctx){return chk.reference(ctx.get("name"),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("handle"),ctx,"h");}return body_0;})();
(function(){dust.register("nav",body_0);function body_0(chk,ctx){return chk.write("<section class=\"nav clearfix\"><h2 class=\"tdb\"><a href=\"http://www.thedailybeast.com\">The Daily Beast</a></h2><a class=\"logo\" href=\"#web\"><img src=\"img/logo.png\" alt=\"Best of The Daily Beast 2013\"><h1 class=\"page-title ir\">Beast Best Awards 2013</h1></a> <nav><ul class=\"sections\"><li><h2 class=\"heading about\"><a href=\"#about\">About</a></h2><div class=\"about-popup wrapper collapse\"><a class=\"close\" href=\"#\"><span class=\"icon-close-x\" aria-hidden=\"true\"></span></a><div class=\"main\"><p>The Internet is infinite, but your time isn't. To help you surf wisely, The Daily Beast picked the most relevant, entertaining, original, and&mdash;in some cases&mdash;overlooked websites and Twitter feeds.<br/>Read them, skip the rest.</p></div></div></li>            <li><input class=\"search-field search-field-active\" type=\"textfield\" title=\"Search...\"/></li><li><h2 class=\"web heading\"><a href=\"#web\">Web</a></h2><ul class=\"web dropdown collapse\"><li><a class=\"active\" href=\"#web\">All</a></li>").section(ctx.getPath(false,["web","categories"]),ctx,{"block":body_1},null).write("</ul></li><li><h2 class=\"twitter heading\"><a href=\"#twitter\">Twitter</a></h2><ul class=\"twitter dropdown collapse\"><li><a class=\"active\" href=\"#twitter\">All</a></li>").section(ctx.getPath(false,["twitter","categories"]),ctx,{"block":body_2},null).write("</ul></li><li class=\"social first-social\"> <!-- TODO: fill out image for facebook --><a class=\"facebook-link\" href=\"#\" data-link=\"http://beastbestawards.com\" data-picture=\"http://beastbestawards.com/img/bestofweb.jpg\" data-name=\"The Daily Beast's 2013 Beast Best Awards\" data-description=\"The Daily Beast selects the best websites and Twitter accounts in the 2013 Beast Best Awards.\"><span class=\"icon-facebook\" aria-hidden=\"true\"></span></a><a class=\"twitter-link\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?url=http%3A%2F%2Fbeastbestawards.com&text=Check out The Daily Beast's 2013 %23BeastBest Awards! These are the best websites ->&via=thedailybeast&hashtags=beastBest&related=Newsweek&counturl=http://beastbestawards.com\"><span class=\"icon-twitter\" aria-hidden=\"true\"></span></a></li><li class=\"social\"></li></ul>   </nav></section>");}function body_1(chk,ctx){return chk.write("<li><a href=\"#").reference(ctx.get("id"),ctx,"h").write("\">").reference(ctx.get("name"),ctx,"h").write("</a></li>");}function body_2(chk,ctx){return chk.write("<li><a href=\"#").reference(ctx.get("id"),ctx,"h").write("\" data-filter=\"").reference(ctx.get("name"),ctx,"h").write("\">").reference(ctx.get("name"),ctx,"h").write("</a></li>");}return body_0;})();
(function(){dust.register("overlayitem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"info ").reference(ctx.get("id"),ctx,"h").write(" section-").reference(ctx.get("section"),ctx,"h").write("\"><a class=\"close\" href=\"#\"><span class=\"icon-close-x\" aria-hidden=\"true\"></span></a><div class=\"main\"><h5 class=\"item-rubric\">").reference(ctx.get("category"),ctx,"h").write("</h5><h3 class=\"title\"><a href=\"").reference(ctx.get("url"),ctx,"h").write("\" target=\"_blank\">").reference(ctx.get("name"),ctx,"h").write("</a></h3>").exists(ctx.get("tweet"),ctx,{"block":body_1},null).write("<a href=\"").reference(ctx.get("url"),ctx,"h").write("\" target=\"_blank\" data-obehav=\"true\"><img class=\"").exists(ctx.get("imgPathLg"),ctx,{"else":body_2,"block":body_3},null).write("\" src=\"").exists(ctx.get("imgPathLg"),ctx,{"else":body_4,"block":body_5},null).write("\"></a>").exists(ctx.get("tweet"),ctx,{"block":body_6},null).exists(ctx.get("imgPathLg"),ctx,{"block":body_7},null).write("</div>").partial("social",ctx,null).write("</div>");}function body_1(chk,ctx){return chk.write("<p class=\"text\">").reference(ctx.get("blurb"),ctx,"h").write("</p>");}function body_2(chk,ctx){return chk.write("circle");}function body_3(chk,ctx){return chk.write("rect");}function body_4(chk,ctx){return chk.reference(ctx.get("imgPath"),ctx,"h");}function body_5(chk,ctx){return chk.reference(ctx.get("imgPathLg"),ctx,"h");}function body_6(chk,ctx){return chk.write("<p class=\"quote\"><img class=\"twitter-bird\" src=\"img/twitter-bird.png\">\"").reference(ctx.get("tweet"),ctx,"h").write("\"</p>");}function body_7(chk,ctx){return chk.write("<p class=\"text\">").reference(ctx.get("blurb"),ctx,"h").write("</p>");}return body_0;})();
(function(){dust.register("social",body_0);function body_0(chk,ctx){return chk.write("<a class=\"facebook-link\" href=\"#\" data-link=\"http://beastbestawards.com/#").reference(ctx.get("id"),ctx,"h").write("\" data-picture=\"http://beastbestawards.thedailybeast.com/").reference(ctx.get("imgPath"),ctx,"h").write("\" data-name=\"").reference(ctx.get("name"),ctx,"h").write(" named one of The Daily Beast's 'Beast Best' ").exists(ctx.get("tweet"),ctx,{"else":body_1,"block":body_2},null).write("\" data-description=\"See who else made the cut at BeastBestAwards.com!\"><span class=\"icon-facebook\" aria-hidden=\"true\"></span></a><a class=\"twitter-link\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?url=http%3A%2F%2Fbeastbestawards.com/%23").reference(ctx.get("id"),ctx,"h").write("&text=Congrats ").exists(ctx.get("handle"),ctx,{"else":body_3,"block":body_4},null).write(" for being named one of @thedailybeast's %23beastbest ").exists(ctx.get("tweet"),ctx,{"else":body_5,"block":body_6},null).write("!&related=Newsweek&counturl=http://beastbestawards.com/%23").reference(ctx.get("id"),ctx,"h").write("\"><span class=\"icon-twitter\" aria-hidden=\"true\"></span></a> ");}function body_1(chk,ctx){return chk.write("websites");}function body_2(chk,ctx){return chk.write("Twitter accounts");}function body_3(chk,ctx){return chk.reference(ctx.get("name"),ctx,"h");}function body_4(chk,ctx){return chk.reference(ctx.get("handle"),ctx,"h");}function body_5(chk,ctx){return chk.write("websites");}function body_6(chk,ctx){return chk.write("Twitter accounts");}return body_0;})();