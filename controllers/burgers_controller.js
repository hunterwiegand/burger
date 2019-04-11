var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burger: data
        };
        res.render("index", hbsObj);
        console.log("controller data[0]: " + hbsObj.burger[0].burger_name);
    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    console.table(req.body)

    burger.updateOne(
        {
            devoured: req.body.devoure
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});
module.exports = router;

