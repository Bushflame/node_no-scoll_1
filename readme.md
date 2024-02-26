# NODE NO-SCROLL_1
## The first repo of a no scroll SAAS application designed to imitate a native mobile application
### Divided across separate repos to overcome BitBucket's inability to regress to an earlier version, meaning repos are not tied to Github. Afterall it is owned by Microsoft who appear to delight in compliicating even the simplest of processes 
### Esentially a model for sellers to pay a fee to advertise their wares regardless of the product. incorporating..
* Node & Express
* Mongodb
* Stripe payments (todo)
> Currently only has basic functionality: Navigation, routes with index and about pages
### Built with Pythonesque type languages..
* Template engine and frontend markup: Pug. (Specific features have their own Pug includes)
* Preprocessor: Stylus. (Specific features have their own styl sheet which are loaded into the main styl sheet (index))
# Structure
* So as not to upset the SEO gods: listings are loaded on to a single doc devided into sections. Each section is devided into pseudo pages. 
* Each page has two sides navigated by buttons on the centre of the right
* On desktop both sides are visible
* Pseudo pages are navigated via a front end paginator at the bottom. Pagination logic is done using querySelectorAll so no further logic is needed when pages are added/removed
* Both sides and pseudo pages are stacked in a css grid and accessed by changing their reespective stacking order so as not to affect the page flow for screen readers, nor piss of search engines with conditionally visible content( no button clicks required fo crawlers to access sections)

> To enable quick changes of the colour scheme, css custom vars are used for the colours. Two contrasting colours are used , both with shades ranging from light to dark, incremented in 10% steps
### Why use Node?
* Sick of framework breaking changes and don't want to be tied to earlier versions
* As well as security issues, not sure if the likes of Wordpress can handle this type of app
* Not familiar with Python nor PHP (although love indentation type coding and may give Python a go in the future)
* Besides hating Typescript, not enough documention for the likes of Deno or Bun
* Plenty of documentation, usefull for programming idiots such as myself 
