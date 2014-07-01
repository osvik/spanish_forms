function logErrorInAnalytics(e){var t=validator.numberOfInvalids();if(t>=1){$.each(validator.errorList,function(t,n){typeof _gaq=="object"&&_gaq.push(["_trackEvent",e,"submit-error",validator.errorList[t].element.name]);typeof ga=="function"&&ga("send","event",e,"submit-error",validator.errorList[t].element.name)})}}

function setTheCookie(e){var t=new Date;var n=t.getMonth()+1,r=t.getDate(),i=t.getFullYear();var s=(n<10?"0":"")+n+"/"+(r<10?"0":"")+r+"/"+i;var o=t.getHours(),u=t.getMinutes(),a=t.getSeconds();var f=(o<10?"0":"")+o+":"+(u<10?"0":"")+u+":"+(a<10?"0":"")+a;t.setDate(t.getDate()+180);var l=s+" "+f+"; expires="+t.toUTCString();document.cookie=e+"="+l+"; Path=/"}

function readCookie(e){var t;return(t=(new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)")).exec(document.cookie))?t[1]:null}

/* Uses the API to get number of singups */
function displayCounter (selector) {
        var url1 = "https://act.greenpeace.org/ea-dataservice/data.service?service=EaEmailAOTarget&token=e0940820-37cf-45fb-bd49-65785e9e8e57&campaignId=";
        var en_campaign = $(selector).data("campaign-id") || "29295";
        var url2="&contentType=json&resultType=summary&callback=?";
        $.getJSON( url1 + en_campaign + url2, function( data ) {
          var number_of_signups = data.rows[0].columns[5].value;
          $(selector).text(number_of_signups);
        });
}

/* Uses Twitter API to get number of tweets */
function displayTweets (selector) {
        var url1 = "https://cdn.api.twitter.com/1/urls/count.json?url=";
        var related_url = $(selector).data("url");
        var url2="&callback=?";
        $.getJSON( url1 + related_url + url2, function( data ) {
            $(selector).text(data.count);
        });
}

/* Uses Facebook API to get number of Likes */
function displayLikes(selector) {
        var url1 = "https://graph.facebook.com/fql?q=SELECT%20like_count,%20total_count,%20share_count,%20click_count,%20comment_count%20FROM%20link_stat%20WHERE%20url=%27";
        var related_url = $(selector).data("url");
        var url2="%27&callback=?";
        $.getJSON( url1 + related_url + url2, function( data ) {
            var total = data.data[0].total_count;
            $(selector).text( total );
        });
}

// Validates Spanish ID number - Returns: 1 = NIF ok, 2 = CIF ok, 3 = NIE ok, -1 = NIF error, -2 = CIF error, -3 = NIE error, 0 = ??? error
function str_replace(e,t,n){var r=e,i=t,s=n;var o=i instanceof Array,u=s instanceof Array,r=[].concat(r),i=[].concat(i),a=(s=[].concat(s)).length;while(j=0,a--){if(s[a]){while(s[a]=s[a].split(r[j]).join(o?i[j]||"":i[0]),++j in r){}}}return u?s:s[0]}
function valida_nif_cif_nie(e){var t=e.toUpperCase();var r="TRWAGMYFPDXBNJZSQVHLCKE";if(t!==""){if(!/^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$/.test(t)&&!/^[T]{1}[A-Z0-9]{8}$/.test(t)&&!/^[0-9]{8}[A-Z]{1}$/.test(t)){return 0}if(/^[0-9]{8}[A-Z]{1}$/.test(t)){posicion=e.substring(8,0)%23;letra=r.charAt(posicion);var s=t.charAt(8);if(letra==s){return 1}else{return-1}}suma=parseInt(e[2])+parseInt(e[4])+parseInt(e[6]);for(i=1;i<8;i+=2){temp1=2*parseInt(e[i]);temp1+="";temp1=temp1.substring(0,1);temp2=2*parseInt(e[i]);temp2+="";temp2=temp2.substring(1,2);if(temp2==""){temp2="0"}suma+=parseInt(temp1)+parseInt(temp2)}suma+="";n=10-parseInt(suma.substring(suma.length-1,suma.length));if(/^[KLM]{1}/.test(t)){if(e[8]==String.fromCharCode(64+n)){return 1}else{return-1}}if(/^[ABCDEFGHJNPQRSUVW]{1}/.test(t)){t=n+"";if(e[8]==String.fromCharCode(64+n)||e[8]==parseInt(t.substring(t.length-1,t.length))){return 2}else{return-2}}if(/^[T]{1}/.test(t)){if(e[8]==/^[T]{1}[A-Z0-9]{8}$/.test(t)){return 3}else{return-3}}if(/^[XYZ]{1}/.test(t)){pos=str_replace(["X","Y","Z"],["0","1","2"],t).substring(0,8)%23;if(e[8]==r.substring(pos,pos+1)){return 3}else{return-3}}}return 0}

jQuery.validator.addMethod("es_nifcifnie", function(value, element) {
    return this.optional(element) || valida_nif_cif_nie( value.toUpperCase() )  >= 1 ;
}, "Valid Spanish NIF, NIE or CIF for example 82451384H or X6909535J");

jQuery.validator.addMethod("es_phone", function(value, element) {
    return this.optional(element) || /^[6789]\d{8}$/.test(value) || value =="Teléfono, Ej. 623456789";
}, "Spanish landline or mobile phone, for example 623456789");

jQuery.validator.addMethod("es_first_name", function(value, element) {
    return this.optional(element) || value!= "Nombre *";
}, "Your first name, please");

jQuery.validator.addMethod("es_first_surname", function(value, element) {
    return this.optional(element) || value!= "1º Apellido *";
}, "Your first surname, please");

