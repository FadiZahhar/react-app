import Express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import { match, RouterContext } from "react-router";
// using the routes folder as a common javascript for client and server at the same time.
import routes from "./components/routing/routes";


const app = new Express();
// set the view engine to be ejs
app.set("view engine", "ejs");
// set the path of the views
app.set("views", path.join(__dirname, "views"));
// set the static path location
app.use(Express.static(path.join(__dirname, "public")));

// this is the code is the hard of the server.
app.get("*", function(req, res) {
    match({routes, location: req.url}, function(error, redirectLocation, renderProps) {
        // check if error return 500 server error
        if (error) {
            return res.status(500).send(error.message);
        }
        // if location was redirect return 302 server status.
        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        // if we have render props then render the RouterContext the render props
        // render the guitar-page.
        if (renderProps) {
            let html = renderToString(<RouterContext {...renderProps} />);

            return res.render("guitar-page", {html});
        }
        // return 404 not found in case all are not handeled.
        return res.status(404).send("Not Found");
    });
});

// put the port
const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if (error) {
        return console.error(error);
    }

    console.log("Production Express server running at localhost: " + PORT);
});