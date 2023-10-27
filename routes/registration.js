const router = require("express").Router();
const { User } = require("../models/user");

router.post("/", async(req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(user) {
            return res.status(409).send({ message: "This user already regisered!" });
        }

        await new User({ ...req.body }).save();

        res.status(201).send({ message: "User succsesfully registered!" });

    }catch(error) {
        res.status(500).send({ message: "Invalid Server Error!" });
    }
})

module.exports = router;