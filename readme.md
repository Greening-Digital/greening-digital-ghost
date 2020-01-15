## FAQs

### I want to add new posts onto the page. How do I do this?

Use the `{{#get 'posts'}} {/get}}` magic.

This will query the Ghost Content API to load content, _server side_. Ths is conceptually similar to Wordpress's WPQuery.

https://ghost.org/docs/api/v3/handlebars-themes/helpers/get/

### How do I keep the file size nice and svelte?

We're using TailwindCSS, which relies on functional css. This lets us use PurgeCSS to clear out most of the unused CSS, and end up with relatively small payloads sent over the wire.

https://tailwindcss.com/docs/controlling-file-size/

### Todo

- [ ] set up basic css pipeline
- [ ] document how to set up css pipeline for future self / others
- [ ] adapt to use local css not huge CDN versions
- [ ] workout how to make production size assets
- [ ] find assets
  - [ ] logos
  - [ ] platform, packet process icons
  - [ ] bio pics
- [ ] add `#get` query for pages on home page
- [ ] add `#get` query for blog posts on home page
- [ ] actual footers
