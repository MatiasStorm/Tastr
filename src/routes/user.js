const path = require("path");
const router = require("express").Router();

module.exports = (pagePath, createPage) => {
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

    router.get("/create-tasting", (req, res) => {
        const page = createPage(path.join(pagePath, "create-tasting.html"));
        res.send(page);
    });

    return router;
};