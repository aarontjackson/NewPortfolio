const db = require("../models");

module.exports = function (app) {
    app.post("/api/contact", function (req, res) {
        console.log(req.body);
        db.Contact.create({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment
        }).then(function
            (Contact) {
            res.end();
        });
    });
};