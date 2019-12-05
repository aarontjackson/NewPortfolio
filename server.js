require("dotenv").config();
const express = require("express");
const db = require("./models");
// const knex = require("knex")({
//     client: 'mysql2',
//     connection: {
//         host: '127.0.0.1',
//         user: 'Aaron Jackson',
//         password: 'rootroot',
//         database: 'contact'
//     }
// });

// knex.select('*').from('contacts').then(data => {
//     console.log(data);
// });

const app = express();
let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

const syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
    syncOptions.force = false;
}

db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;