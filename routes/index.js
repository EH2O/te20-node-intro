const  express = require('express');
const  router = express.Router();

const nav = [
    {
        url: "/",
        title: "Home"
    },    
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/contact",
        title: "Contact"
    }
]

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
        nav: nav
    });
});
router.get('/about', async function (req, res, next) {
    res.render('index.njk', {
        message: 'This is a school thingy',
        title: 'about',
        nav: nav
    });
});
router.get('/contact', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Du får inget',
        title: 'Info',
        nav: nav
    });
});

module.exports = router