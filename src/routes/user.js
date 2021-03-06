const path = require("path");
const router = require("express").Router();
const { authenticate } = require("../auth.js");

module.exports = (pagePath, createPage) => {
    router.use(authenticate);

    router.get("/dashboard", (req, res) => {
        const page = createPage(path.join(pagePath, "dashboard.html"));
        res.send(page);
    });

    router.get("/account", (req, res) => {
        const page = createPage(path.join(pagePath, "account.html"));
        res.send(page);
    });

    router.get("/explore", (req, res) => {
        const page = createPage(path.join(pagePath, "explore.html"));
        res.send(page);
    });

    router.get("/held-tastings", (req, res) => {
        const page = createPage(path.join(pagePath, "held-tastings.html"));
        res.send(page);
    });

    router.get("/my-tastings", (req, res) => {
        const page = createPage(path.join(pagePath, "my-tastings.html"));
        res.send(page);
    });

    router.get("/my-tastings/:id", (req, res) => {
        const { id } = req.params;
        const page = createPage(path.join(pagePath, "view-tasting.html"), { id });
        res.send(page);
    });

    router.get("/create-tasting", (req, res) => {
        const page = createPage(path.join(pagePath, "create-tasting.html"));
        res.send(page);
    });

    return router;
};
