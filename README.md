# Example templates
This templates are **example template** to build petition pages in the Spanish office. We wanted a flexible design, where we could **customize everything**.

This templates can be **hosted** anywhere, including [secured.greenpeace.org](https://secured.greenpeace.org), [www.greenpeace.org](http://www.greenpeace.org) or micro sites with it's own domain or server.

They send user's data to **Engaging Networks**, but they can be easily adapted to send data to Silverpop or other custom made scripts.

And of course they have to work well in **mobile phones**, tablets and desktop computers.

## Status

- The status of the bees form is: **BETA**. We need to conduct more mobile browser tests, although we haven't find major problem so far.

## Features

### Design / Development

- **Responsive** design with responsive images.
- Form validator that allows **complex validation rules** and that can be customized trough the html code.
- Uses **bootstrap** a widely used CSS/JS library.
- **Cookie law** compliant.
- Works well enough with JavaScript off.
- Works well enough with CSS off.

### Social networks

- Both **open graph** and **Twitter cards** are enabled.
- Facebook, Twitter and Google Plus **social media buttons** in the thank you page.
- **Counters** for the number of tweets and number of Facebook likes pointing to the landing page.

### Dynamic info on page

- **Number of signups** can be added to the page either in between text or as a designed counter.

### SEO

- Html is structured for SEO, with **headers** and **meta information**

### Google Analytics and marketing

- Records all **Google Analytics campaign parameters in the database**. Alternatively we can use any other parameter we want.
- Uses a GA event to track signups, so we can use **multiple thank you pages** or AB test between this and other landing pages or thank you pages.
- GA Events are also used to **track error messages** on the form and improve usability.
- Clicktracking buttons and links.
- **Yandex Metrica** enabled.
- **Google remarketing** enabled.

### Mods

Users can add an hash to the end of the URL and modify the page behavior. At the moment two hash mods have been implemented:

- **\#notel** - Makes the phone number not required.
- **\#notrack** - Does not track in Google Analytics, Yandex, Google Remarketing or the database.

## Tests

- We include **unit tests** to help webbies check for html errors. Uncomment the html at the end of the page to enable unit testing.
- We're doing some **browser tests**. Please check the document `Browser_tests.md`.

