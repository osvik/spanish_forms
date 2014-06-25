# To use type in the terminal sh concatenate.sh

#HEAD

cat css/bootstrap-custom.min.css css/simple_form.css > css/default-style.css
echo "HEAD css: Concatenated bootstrap-custom.min.css and simple_form.css into default-style.css"

cat js/modernizr.custom.44603.js js/createelement.js js/picturefill.min.js > js/library-head.min.js
echo "HEAD JavaScript: Concatenated Modernizr, createelement.js and picturefill into the file library-head.min.js"

# FOOTER

cat js/jquery-1.11.1.min.js js/bootstrap-custom.min.js js/jquery.validate.min.js js/help-functions.js > js/library-footer.min.js
echo "FOOTER: Concatenated jQuery, bootstrap, jquery validate and help functions and saved in the file library-footer.min.js"

cat js/scripts-landing.js js/tracking.js > js/landing_and_tracking.js
echo "FOOTER: Concatenated scripts-landing.js and tracking.js into landing_and_tracking.js"

cat js/scripts-thank-you.js js/tracking.js > js/thank_you_and_tracking.js
echo "FOOTER: Concatenated scripts-landing.js and tracking.js into thank_you_and_tracking.js"


