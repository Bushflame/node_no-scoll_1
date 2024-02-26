//SHOW / HIDE NAV ON BTN CLICK
function showNav() {
    let getNav = document.getElementById('navwrap')
    getNav.classList.add('show-nav')
}
function hideNav() {
    let getNav = document.getElementById('navwrap') 
    getNav.classList.remove('show-nav')
}

 //on page load page 4 is loading - force page 1 to load
window.onload = function exampleFunction() { 
    document.getElementById('btn-1').click()
} 

//  TOGGLE BACK AND FRONT OF PAGES ----------------------------------
// it is important to note that the term page does not refer to page in the true sense
// page refers to a section of a single global page
// each page(section) has a front and back
// front_1 refers to the front of page 1 and so on
// both front and back are sides
// visible side is set by grid order
// using grid order negates need to hide content or use conditionals...
//... so as not affect SEO

// Call both sides to elimate two calls in the switches
//page 1 calls and default -----------------
var front_1 = document.getElementById('front-1')
var back_1 = document.getElementById('back-1')
var front_2 = document.getElementById('front-2')
var back_2 = document.getElementById('back-2')
var front_3 = document.getElementById('front-3')
var back_3 = document.getElementById('back-3')
var front_4 = document.getElementById('front-4')
var back_4 = document.getElementById('back-4')


// set defaults--- needed else empty page shown 

front_2.classList.add('show-side')
front_3.classList.add('show-side')
front_4.classList.add('show-side')
front_1.classList.add('show-side')
//show target and hide others
function show_side(e) {
    switch (e) {
        case 'page-1':
            back_1.classList.add('show-side')
            front_1.classList.remove('show-side')
            break
        case 'page-2':
            back_2.classList.add('show-side')
            front_2.classList.remove('show-side')
            break
        case 'page-3':
            back_3.classList.add('show-side')
            front_3.classList.remove('show-side')
            break
        case 'page-4':
            back_4.classList.add('show-side')
            front_4.classList.remove('show-side')
            break
    }
}
// hide target and show other
function hide_side(e) {
    switch (e) {
        case 'page-1':
            front_1.classList.add('show-side')
            back_1.classList.remove('show-side')
            break
        case 'page-2':
            front_2.classList.add('show-side')
            back_2.classList.remove('show-side')
            break
        case 'page-3':
            front_3.classList.add('show-side')
            back_3.classList.remove('show-side')
            break
        case 'page-4':
            front_4.classList.add('show-side')
            back_4.classList.remove('show-side')
            break
    }
}
// PAGINATOR ------------------------------
//get all pages
var pages_1 = document.getElementById('pages-1')
var pages_2 = document.getElementById('pages-2')
var pages_3 = document.getElementById('pages-3')
var pages_4 = document.getElementById('pages-4')

//set default - not working - see above window.onLoad
//pages_1.classList.add('show-page')

// get btns ready to change bg colour when active
var btn_1 = document.getElementById('btn-1')

function paginate(e) {
    switch (e) {
        case 'pages-1':
            pages_1.classList.add('show-pages')
            pages_2.classList.remove('show-pages')
            pages_3.classList.remove('show-pages')
            pages_4.classList.remove('show-pages')
            console.log('in page 1',)
            break
        case 'pages-2':
            pages_1.classList.remove('show-pages')
            pages_2.classList.add('show-pages')
            pages_3.classList.remove('show-pages')
            pages_4.classList.remove('show-pages')
            console.log('in page 2',)
            break
        case 'pages-3':
            pages_1.classList.remove('show-pages')
            pages_2.classList.remove('show-pages')
            pages_3.classList.add('show-pages')
            pages_4.classList.remove('show-pages')
            console.log('in page 3',)
            break
        case 'pages-4':
            pages_2.classList.remove('show-pages')
            pages_1.classList.remove('show-pages')
            pages_3.classList.remove('show-pages')
            pages_4.classList.add('show-pages')
            console.log('in page 4',)
            break
            
    }  
}
// PAGINATOR -------------------------------------------------
// on paginator btn click two functions are triggered
// arg 1 (e) gets the requested page and triggers the getPage function...
//..then passes the second arg (btn) to the next fnction to change button background colour
// being a no-scroll app page area is limited, which would normally require a lot of hidden content
// ...may effect seo
// for seo purposes, each listing is loaded onto one doc (page)
// the doc is split into sections.
// sections are stacked in a single column single row css grid
// the paginator changes the order of the sections(pseudo pages)
// page flow remains correct
//  each section is named 'page'
// 
function getPage(e,btn) {
    let page = document.querySelectorAll('.page')
    document.addEventListener('click', run());
    function run() {
        for (var i = 0; i < page.length; i++){
            //get requested page
            if (e == page[i].id) {
                let activePage = document.getElementById(page[i].id)
                activePage.classList.add('show-pages')
                //send second arg to color bgs + txt
                btnBg(btn)
                //send page to back when not in view
                } else {
                let inactive = document.getElementById(page[i].id)
                inactive.classList.remove('show-pages')
            }
        }
    }
}
// COLOUR ACTIVE BUTTON BG'S + text
// using seperate function from page getter to avoid entanglement
function btnBg(e) {
    // get all btns
    let btns = document.querySelectorAll('.btn-bg')  
    
    document.addEventListener('click', run());
    function run() {
        for (var i = 0; i < btns.length; i++){
            // get active button - add background colour           
            if (e == btns[i].id) {
                console.log('btns e', btns[i].id)     
                let activeBtn = document.getElementById(e)
                activeBtn.classList.add('bg-btn')
            //ensure button bg color is removed when button inactive
            } else {
            let inactive = document.getElementById(btns[i].id)
            inactive.classList.remove('bg-btn')
        }
        }
    }
}
// end of paginator-----------------------------------------------