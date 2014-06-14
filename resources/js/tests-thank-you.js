function is_all_in_https() {
var check = true;
if (
    $("script[src^='http:']").length > 0
    || $("link[type='text/css'][href^='http:']").length > 0
    || $("img[src^='http:']").length > 0
    || $("iframe[src^='http:']").length > 0
    ) {
        check = false;    
    }
    
    return check
}

test("Libraries exist", function(){
        
        ok( typeof( Modernizr ) == "object", "Modernizr works");				
        ok( typeof( jQuery ) == "function", "jQuery works");
        ok( typeof( $().modal ) == "function", "Bootstrap javascript is loaded");
        ok( typeof( picturefill ) == "function", "Picturefill works");
        ok( typeof ga == "function" || typeof (_gaq ) == "object" , "Google Analyics is working");
        ok( typeof( Ya ) == "object", "Yandex Metrica is working");
        ok( typeof( google_conversion_id ) == "object" && typeof( google_remarketing_only ) == "object", "Google Remarketing is working");
        
});

test("Misc", function() {
        
        equal( window.location.protocol, "https:", "Using https for the page URL");
        ok( is_all_in_https() == true, "All linked files are in https" );
        
        ok( campaign_name !="FIXME" && campaign_name !="", "Campaign name is defined");
        equal ( testing_form, false, "Testing mode is disabled");
        
});


test( "Metada", function() {
        
        ok( $("title").text().toString().length > 3, "Has title" );
        equal ( $("meta[name=robots]").prop("content"), "noindex", "Meta name robots has noindex");
        
});