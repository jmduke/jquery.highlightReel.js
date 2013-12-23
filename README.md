# jQuery.highlightReel.js

A simple li'l plugin to fetch your latest shots from [Dribbble](www.dribbble.com).

Check out the demo [here](http://rawgithub.com/jmduke/jquery.highlightReel.js/master/test.html).

This plugin should be treated as a 0.1.0, if that: the main functionality is all baked in, but I'm planning a decent amount of more customization.

# Usage & Dependencies

As you might have been able to guess from the name of the plugin, this has a dependency on jQuery, but that's it.

Including the files is simple:

    <script src="path.to.jQuery"></script>
    <script src="path.to.jQuery.highlightReel.js"></script>

And invoking it is simple as well:

    <script>
        $(".highlightReel").highlightReel({
            username : "rypearts"
        });
    </script>
    
## Options

Besides the required `username` option, the `highlightReel()` method takes a couple of options:

 option | type | description | default
--------|------|-------------|---------
count | int  | number of shots to retrieve | 5
title | boolean  | display title of shot | true
teaser | boolean  | display teaser image of shot as opposed to the real thing | true
linked | boolean  | wrap the shot in a link to it on Dribbble | true
stats | boolean  | display number of views and likes | true

# License

I'm not really sure how licenses work, so let's just go ahead and say [MIT](http://opensource.org/licenses/MIT).  

If you do end up using this plugin, do me a favor and [shoot me an email](mailto:me@jmduke.com) just to boost my ego a little.
