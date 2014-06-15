/* ---------- Fallback when the browser does not support svg - The size of the logo changes (responsive), so we use svg by default ---------- */

if ( Modernizr.svg == false) {
        $(".greenlogo").prop("src", "https://secured.greenpeace.org/espana/Global/espana/engaging/resources/images/greenpeace.png");
}

/* ---------- /Fallback when the browser does not support svg ---------- */

/* ---------- Counter ---------- */

if ( $(".number_of_signups").length > 0) {
        displayCounter(".number_of_signups");
}

/* ---------- /Counter ---------- */

/* ---------- Privacy policy link and tab ---------- */

$("#privacy_policy_link_footer").on("click", function(){
    typeof ga == "function" && ga('send', 'event', campaign_name, 'PrivacyPolicy', 'ClickFooter' );
    typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'PrivacyPolicy' , 'ClickFooter' ]);
});

/* ---------- /Privacy policy link and tab ---------- */

/* ---------- Tracking clicks in the donate button and social sharing buttons in Google Analytics   ---------- */

$(".GoToDonationForm").on("click", function(){
        typeof ga == "function" && ga('send', 'event', campaign_name, 'Click', 'DonateButton' );
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'Click', 'DonateButton' ]);
        
        window.location.href = $(this).data("click");
});

$(".facebook").on("click", function() {
        typeof ga == "function" && ga('send', 'event', campaign_name, 'SocialShare', 'Facebook' );
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'SocialShare', 'Facebook' ]);
});

$(".twitter").on("click", function() {
        typeof ga == "function" && ga('send', 'event', campaign_name, 'SocialShare', 'Twitter' );    
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent',  campaign_name, 'SocialShare', 'Twitter' ]);
});

$(".googleplus").on("click", function() {
        typeof ga == "function" && ga('send', 'event', campaign_name, 'SocialShare', 'GooglePlus' );
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'SocialShare', 'GooglePlus' ]);				
});

/* ---------- /Tracking clicks in the donate button and social sharing buttons in Google Analytics   ---------- */

/* ---------- Goal ---------- */

typeof ga == "function" && ga('send', 'event', campaign_name, 'Signup', 'Signup' );
typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'Signup', 'Signup' ]);	

/* ---------- /Goal ---------- */

