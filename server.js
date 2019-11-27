require("dotenv").config();

const db = require("./models");

const app = express();
let PORT = process.env.PORT