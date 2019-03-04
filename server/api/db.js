const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
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
    pages,
    errors
}, {
    id: '123456',
    name: 'OGCOM',
    description: 'Consectetur sint esse dolore cillum sint magna ullamco commodo esse dolore elit.',
    url: 'https://onlinegambling.com',
    pages,
    errors
}];

db.defaults({
    websites: [{
        id: '123456',
        name: 'OGCOM',
        description: 'Consectetur sint esse dolore cillum sint magna ullamco commodo esse dolore elit.',
        url: 'https://onlinegambling.com',

    }]
});
