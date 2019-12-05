const db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Contact.findAll({}).then(function (Contact) {
            res.json(Contact);
        });
    });

    app.post("/", function (req, res) {
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