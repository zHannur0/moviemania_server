const router = require("express").Router();
const { User } = require("../models/user");

router.post("/", async(req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(!user) {
            return res.status(409).send({ message: "Invalid email or password" });
        }

        if(req.body.password !== user.password) {
            return res.status(409).send({ message: "Invalid email or password" });
        }

        res.status(201).send({ message: "User authorized successfully" });
        
    }catch(error) {
        res.status(500).send({ message: "Invalid Server Error!" });
    }
})

module.exports = router;