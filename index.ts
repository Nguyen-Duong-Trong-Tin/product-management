import express, { Express } from "express";
const app: Express = express();

import dotenv from "dotenv";
dotenv.config();

import database from "./configs/database.config";
database.connect();

const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");
app.use(cookieParser("ABCXYZ"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

const moment = require("moment");
(global as any).moment = moment;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"))

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
import clientRoutes from "./routes/client/index.route";
clientRoutes(app);

import adminRoutes from "./routes/admin/index.route";
adminRoutes(app);

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});