const express = require("express");
const router = new express.Router();
const userdb = require("../../dbtodos")


router.post("http://localhost:3000/",async(req,res)=>{
    const { todo } = req.body;

    if (!todo) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

            const finalUser = new userdb({
                todo
            });

            // here password hasing

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }
});



module.exports = router;