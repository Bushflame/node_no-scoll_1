# NODE NO-SCROLL_1

# The first stage of a no scroll SAAS application designed to imitate a native mobile application

# Divided across separate repos to overcome BitBucket's inability to regress to an earlier version, meaning repos are not tied to Github. Afterall it is owned by Microsoft who appear to delight in compliicating even the simplest of processes 

# Esentially a model for private vendors to pay a fee to list their wares, regardless of the product. Such examples would be: 
* Cars
* Animals 
* Holiday homes 
* Fishing lakes

# Vendors
* Vendors add / edit their listing from their dashboard -> edit
* For a better UX, content is presented in small chuncks, i.e. bullet lists and or a range of styled paragraph blocks, along with images
* The listing will be time limited
* The main heading (h1) will appear in the search box

# customers
* On the search page, customers select their type
* Once clicked they are then presented with snippets, including quick contact, of all of that type
* They can then view specific listing
* Should they choose to sign up, they can bookmark their listings of interest

# Built using:
* Node & Express
* Mongodb
* Pug
* Stylus
* Stripe or Square paywall (todo)-------------------
* Firebase or Passport authentification

# Structure
* So as not to upset the SEO gods: listings are loaded on to a single doc divided into sections. Each section is divided into pseudo pages. 
* Each page has two sides navigated by buttons on the centre right
* On desktop both sides are visible
* Pseudo pages are navigated via a front end paginator at the bottom. Pagination logic is done using querySelectorAll so no further logic is needed when pages are added/removed
* Both sides and pseudo pages are stacked in a css grid and accessed by changing their reespective stacking order so as not to affect the page flow for screen readers, nor piss of search engines with conditionally visible content( no button clicks required for crawlers to access sections)

# css grid
* Grids have been used extensively throughout. 
* By using a single column, single row grid and the grid-order feature, I have so far managed to avoid using position absolute entirely

# Colour scheme
* Only 1 colour  is used. 
* The colour is darkened in increments of 10%. 
* Nomenclature is letters of the greek alphabet: alpha(the lightest) through to kappa(the darkest)

# Why use Node?
* Sick of framework breaking changes and don't want to be tied to earlier versions
* As well as security issues, not sure if the likes of Wordpress can handle this type of app
* Aside from being handcuffed to the service, it's doubtful shopify caters for this type of app
* Not familiar with Python nor PHP (although love indentation type coding and may give Python a go in the future)
* Stability
* Besides hating Typescript, not enough documention for the likes of Deno or Bun
* JavaScript front and backend
* More options for hosting
* Plenty of documentation, useful for programming idiots such as myself 
