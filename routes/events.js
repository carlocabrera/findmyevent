const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Event = require('../models/Event');

// Get Event List
router.get('/', (req, res) =>
    Event.findAll()
        .then(events => {
            console.log(events);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));


// Adde Event Test

router.get('/add', (req, res) => {
    const data = {
        title: 'title test',
        notes: 'notes test',
        details: 'details test',
        description: 'Description test',
        contact_email: 'testing email'
    }

    let { title, notes, details, description, contact_email } = data;

// Insert Into Table
Event.create({
title,
notes,
details,
description,
contact_email
})
.then(gig => res.redirect('events'))
.catch(err => console.log(err));


})

module.exports = router;