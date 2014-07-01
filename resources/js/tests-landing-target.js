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
        ok( typeof( validator ) == "object", "Valdator object exists");
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

test( "Form is well configured", function() {

        equal( $("form").prop("action"), "https://act.greenpeace.org/ea-action/action", "Action goes to the right URL" );
        ok( $("form").prop("method") == "post", "Method is correct" );
        ok( $("form input[name='first_name']").length == 1 && $("form input[name='first_name']").prop("required") == true , "First name exists and it's required");        
        ok( $("form input[name='first_surname']").length == 1 && $("form input[name='first_surname']").prop("required") == true , "First surname exists and it's required");
        ok( $("form input[name='second_surname']").length == 1 , "Second surname exists");        
        ok( $("form input[name='id_number']").length == 1 && $("form input[name='id_number']").prop("required") == true , "ID number exists and it's required");
        ok( $("form input[name='email']").length == 1 && $("form input[name='email']").prop("required") == true , "Email exists and it's required");
        ok( $("form input[name='phone_number']").length == 1 , "Phone number exists");
        ok( $("form input[name='es.Artico.Tintin.Subject']").length == 1 && $("form input[name='es.Artico.Tintin.Subject']").prop("required") == true , "Message subject exists and it's required");        
        ok( $("form textarea").length == 1 && $("form textarea").prop("required") == true , "Message body exists and it's required");
        ok( $("form button[type='submit']").length == 1 , "Button submit exists");        

        equal ($("form input[name='last_source_string']").length , 1, "1 Input last source string element is on the page");
        ok($("form input[name='last_source_string']:visible").length < 1, "Input last source string element is invisible");
        
} );

test( "Metada", function() {
        
        ok( $("title").text().toString().length > 3, "Has title" );
        ok( $("meta[name=description]").prop("content").length > 15, "Has description" );
        equal( $("link[rel=canonical]").prop("href"), window.location.origin + window.location.pathname , "Canonical link is the URL" );
        equal( $("meta[property='og:title']").prop("content"), $("title").text() , "Og:title is the same as the title" );
        ok( $("meta[property='og:description']").prop("content").length > 15, "og:description has desription");
        ok( $("meta[property='og:image']").prop("content").length > 20, "og:image has image");
        
});

test("Input last source element and sessionStorage", function(){
    
    if ( sessionStorage.getItem("last_source_string") != null) {
        equal( $("input[name='last_source_string']").val(), sessionStorage.getItem("last_source_string"), "Session storage has the same value has the input");
    } else {    
        equal( $("input[name='last_source_string']").val(), "", "Session storage has the same value has the input");    
    }
    
    if ( window.location.search !="") {
        equal( $("input[name='last_source_string']").val() , window.location.search, "Input has the same value as the URL parameters");
    }
    
});