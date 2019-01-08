const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Event = require('../models/Event');

// Get Event List
router.get('/', (req, res) =>
    Event.findAll()
        .then(events => {
            res.render('events', {
                events
            });
        })
        .catch(err => console.log(err)));

// Display add gig form
router.get('/add', (req, res) => res.render('add'))

// Adde Event Test

router.post('/add', (req, res) => {
    let { title, notes, details, description, contact_email } = req.body;

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