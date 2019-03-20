const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync( path.join( __dirname, '../db/db.json'));
const db = low(adapter);

const errors = [{
    id: '3251238475892',
    type: '404',
    requestURL: 'https://local.onlinegambling.com/images/free-games/titlescreens/15282468301264.png'
}, {
    id: '3251238475892',
    type: '404',
    requestURL: 'https://local.onlinegambling.com/images/free-games/titlescreens/15282468300457.jpg'
}, {
    id: '3251238475892',
    type: '404',
    requestURL: 'https://local.onlinegambling.com/images/free-games/titlescreens/15282468300457.jpg'
}];

const pages = [{
    id: '523513459u',
    url: 'https://onlinegambling.com',
    errors: null
}, {
    id: '523513459u',
    url: 'https://onlinegambling.com/casino',
    errors: null
}, {
    id: '523513459u',
    url: 'https://onlinegambling.com',
    errors: null
}, {
    id: '523513459u',
    url: 'https://onlinegambling.com',
    errors: null
}, {
    id: '523513459u',
    url: 'https://onlinegambling.com',
    errors: null
}, {
    id: '523513459u',
    url: 'https://onlinegambling.com',
    errors: null
}];

const websites = [{
    id: '123456',
    name: 'OGCOM',
    description: 'Consectetur sint esse dolore cillum sint magna ullamco commodo esse dolore elit.',
    url: 'https://onlinegambling.com',
    thumb: '/:4000/static/ogcom.png',
    pages,
    errors
}, {
    id: '123457',
    name: 'CORG',
    description: 'Consectetur sint esse dolore cillum sint magna ullamco commodo esse dolore elit.',
    url: 'https://casino.org',
    thumb: '/:4000/static/corg.png',
    pages,
    errors: null
}];

// Populate data - run it only once.
// db.defaults({ websites }).write();

module.exports = db;
