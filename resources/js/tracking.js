if ( location.hash.search("notrack") == -1 && testing_form == false) {
    
    // ----------  Google Analytics ---------- 

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-43128098-1']);
    _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_setDomainName', '.greenpeace.org']);
    
    _gaq.push(['_setSiteSpeedSampleRate', 10]);
    _gaq.push(['_trackPageview']);
    
    _gaq.push(['c._setAccount', ' UA-57175-1']);
        _gaq.push(['c._setAllowLinker', true]);
        _gaq.push(['c._setDomainName', '.greenpeace.org']);
        _gaq.push(['c._setSiteSpeedSampleRate', 10]);
        _gaq.push(['c._trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    
    // ----------  /Google ANALYTICS ---------- 

    // ----------  Google Remarketing ---------- 	  

    var google_conversion_id = 1053230267;
    var google_conversion_label = "1qrXCKWVjAUQu4mc9gM";
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
        // Need this in the hmtl <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">// <![CDATA[ // ]]></script><!-- Remkting -->
    
    // ----------  /Google Remarketing ---------- 

    // ----------  Yandex.Metrika counter ---------- 
    
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter24729443 = new Ya.Metrika({id:24729443,
                        webvisor:true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true});
            } catch(e) { }
        });
    
        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
    
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
       
    // ----------  /Yandex.Metrika counter ---------- 

}




