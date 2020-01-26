## FAQs

### I want to add new posts onto the page. How do I do this?

Use the `{{#get 'posts'}} {/get}}` magic.

This will query the Ghost Content API to load content, _server side_. Ths is conceptually similar to Wordpress's WPQuery.

https://ghost.org/docs/api/v3/handlebars-themes/helpers/get/

### How do I keep the file size nice and svelte?

We're using TailwindCSS, which relies on loads of utility classes to avoid us needing to write extra css. This lets us use PurgeCSS to clear out most of the unused CSS, and end up with relatively small payloads sent over the wire,

https://tailwindcss.com/docs/controlling-file-size/

### Working with local emails

You can use Mailhog to test sending emails, without needing to connect to the internet, if you're on a train for example.
or you're working on templates, and don't want to cruft up your inbox:

First install Mailhog, then add this to `config.development.json`, to replace this:

```json
"mail": {
    "transport": "Direct"
  }
```

With this:

```json
"mail": {
    "transport": "SMTP",
    "options": {
      "host": "0.0.0.0",
      "port": 1025
    }
  },
```

You can see more in [this post on Ghost's forums][mailhog-post] explaining set up in more detail

[mailhog-post]: https://forum.ghost.org/t/using-ghost-with-mailhog-for-local-newsletter-testing/11558

### Todo

- [x] set up basic css pipeline
- [ ] document how to set up css pipeline for future self / others
- [x] adapt to use local css not huge CDN versions
- [x] workout how to make production size assets
- [x] find assets
  - [x] logos
  - [x] platform, packet process icons
  - [ ] bio pics
- [ ] add `#get` query for pages on home page
- [ ] add `#get` query for blog posts on home page
- [ ] actual footers

### Notes

PurgeCSS works nicely enough to generate the files
This invocation took an 883k uncompressed file, and generated one that was 17k uncompressed, and unminified.

```
purgecss --css build/styles.css --content ./\*_/_.hbs --out build/purged/
```

### Credits

Icons

https://www.flaticon.com/family/special/lineal
https://www.flaticon.com/packs/future-technology-15

Platform
https://www.flaticon.com/free-icon/chip_897219

Packets
https://thenounproject.com/search/?q=network&i=409821
https://thenounproject.com/search/?q=network&i=420645
https://thenounproject.com/term/network/50035/

is this a better network icon than we have now?
https://thenounproject.com/term/network/50035/

Process
https://thenounproject.com/search/?q=network&i=409821

Process:
https://www.flaticon.com/free-icon/strategy_993782

Titillium web

greens

AADE87
447821
