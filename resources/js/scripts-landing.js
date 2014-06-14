/* ---------- Fallback when the browser does not support svg - The size of the logo changes (responsive), so we use svg by default ---------- */

if ( Modernizr.svg == false) {
        $(".greenlogo").prop("src", "https://secured.greenpeace.org/espana/Global/espana/engaging/resources/images/greenpeace.png");
}

/* ---------- Counter ---------- */

displayCounter(".number_of_signups");

/* ---------- /Counter ---------- */

/* ---------- Form validation ---------- */

validator = $("#mainform").validate({
    
    rules: {
        id_number: {
            es_nifcifnie: true
        },
        phone_number: {
            es_phone: true
        }
    },

    messages: {
        first_name: {
            required: "Tu nombre por favor"
        },  
        first_surname: {
            required: "Tu primero apellido por favor"
        }, 
        second_surname: {
            required: "Tu segundo apellido por favor"
        },
        email: {
            required: "Tu email por favor",
            email: "Un email válido por favor, ej. nombre@dominio.tld"
        },
        id_number: {
            required: "Un DNI o NIE españoles (sin guiones y sin espacios)",
            es_nifcifnie:"Un DNI o NIE españoles. Por ejemplo 82451384H o X6909535J (sin guiones y sin espacios)"
        },
        phone_number: {
            required: "Tu número de teléfono por favor",
            es_phone: "Número de un fijo o móvil español valido. Ej. 622345679 (sin guiónes y sin espacios)"
            
        },
        privacy: {
            required: "Falta aceptar la política de privacidad"
        }
    },       
    
    submitHandler: function( form ) {
        form.submit();
    }
    
});

/* ---------- /Form validation  ---------- */

/* ---------- Last source form field ---------- */

(function() {
        
    if ( location.hash.search("notrack") == -1 ) {
        
        if ( window.location.search !="") {
            $("input[name='last_source_string']").val( window.location.search );
            if ( Modernizr.sessionstorage == true) {
                sessionStorage.setItem("last_source_string", window.location.search );
            }
        } else {
            if ( Modernizr.sessionstorage == true && sessionStorage.getItem("last_source_string") != null ) {
                var last_source_from_ss = sessionStorage.getItem("last_source_string");
                $("input[name='last_source_string']").val( last_source_from_ss );
            }                
        }
    }    
})();

/* ---------- /Last source form field ---------- */

/* ----------  Disable mandatory phone number for special purposes  ----------*/

function disable_phone_number() {
    if ( location.hash.search("notel") >= 0) {
        $("#phone_number").removeProp("required");
        $("#phone_number").rules("remove", "required");
        $("label[for='phone_number']").text("Teléfono");
    }
}

window.onhashchange = function() {
    disable_phone_number();
};

disable_phone_number();

/* ----------  /Disable mandatory phone number for special purposes  ----------*/

/* ---------- Privacy policy link and tab ---------- */

$("#privacy_policy_link").on("click", function(event) {
        event.preventDefault();
        $("#privacy_policy_text").toggle();
        typeof ga == "function" && ga('send', 'event', campaign_name, 'PrivacyPolicy', 'Toggle' );
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'PrivacyPolicy' , 'Toggle' ]);
});

$("#hide_privacy_policy").on("click", function() {
        $('#privacy_policy_text').hide();
        typeof ga == "function" && ga('send', 'event', campaign_name, 'PrivacyPolicy', 'Hide' );
        typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'PrivacyPolicy' , 'Hide' ]);
});

$("#privacy_policy_link_footer").on("click", function(){
    typeof ga == "function" && ga('send', 'event', campaign_name, 'PrivacyPolicy', 'ClickFooter' );
    typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', campaign_name, 'PrivacyPolicy' , 'ClickFooter' ]);
});

/* ---------- /Privacy policy link and tab ---------- */

/* ---------- Log form errors in Analytics  ---------- */

$("#mainform").on("submit", function() {
    
    if ( $("#mainform").valid() == false ) {
        logErrorInAnalytics( campaign_name );
    }
    
});

/* ---------- /Log form errors in Analytics  ---------- */

/* ---------- Cookie alert ---------- */

$(".close").on("click", function() {
    setTheCookie("CookiesAccepted");
    typeof ga == "function" && ga('send', 'event', 'Cookies', 'Esconder', 'Mensaje' );
    typeof (_gaq ) == "object" && _gaq.push(['_trackEvent', 'Cookies', 'Esconder' , 'Mensaje' ]);
});

if ( readCookie("CookiesAccepted") ) {
    $("#cookieMsg").hide();
}

/* ---------- /Cookie alert ---------- */
