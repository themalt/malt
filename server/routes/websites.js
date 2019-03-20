const express = require('express');
const dbApi = require('../api/db');
const router = express.Router();

function routeWebsitesHandler( req, res ) {
    const websitesData = dbApi.get('websites');
        const { websiteId } = req.params;
        if (!websiteId) {
            console.log('test')
            res.send(websitesData);

            return;
        }
       const targetWebsite = websitesData
            .find( { id: websiteId } )
            .value();

        res.send(targetWebsite);
}

function routePagesHandler(req, res) {
    console.log(req.params)
    const { websiteId, pageId } = req.params;
    // websiteId parameters is obligatory.
    if (!websiteId) {
        res.status(400).send('Missing parameter: websiteId')

        return;
    }

    const websitePages = dbApi.get('websites')
        .find( { id: websiteId } )
        .value()
        .pages;

    // Send all pages.
    if (!pageId) {
        res.send(websitePages);

        return;
    }

    const targetPageData = websitePages
        .find( page => page.id === pageId );

    if (!targetPageData) {
        res.status(400).send(`No page with provided id ${pageId}`)
    } else {
        res.send(targetPageData);
    }
}

router
    .get('/:websiteId?', routeWebsitesHandler )
    .get('/:websiteId/pages/:pageId?', routePagesHandler );

module.exports = router;
