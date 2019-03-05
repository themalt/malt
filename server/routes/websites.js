const express = require('express');
const dbApi = require('../api/db');
const router = express.Router();

router
    .get('/:id', (req, res) => {
        const websitesData = dbApi.get('websites');
        const websiteId = req.param.id;
        if (!websiteId) {
            console.log('test')
            res.send(websitesData);

            return;
        }
       const targetWebsite = websitesData
            .find( { id: websiteId } )
            .value();

        res.send(targetWebsite);
    } );

module.exports = router;
