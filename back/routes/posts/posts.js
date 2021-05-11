const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

//*GET BACK ALL THE 
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: "chizi peida nakardam." })
    }
});

// router.get("/mamad", (req, res) => {
//     res.send("I'm mamad")
// });

//*SUBMIT A POST
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    // console.log(post);

    try {
        const savedPost = await post.save();
        return res.status(201).json(savedPost);

    } catch (error) {
        res.status(400).json({ message: "nakon baradare man, kerm dari mage?!" })
    }
})

//*SPECIFIC POST
router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: 'in dg che ID ke mifresti?!' })
    }
});

//*DELETE POST
router.delete("/:postId", async (req, res) => {
    try {
        await Post.remove({ _id: req.params.postId });
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: "asan nadarim ino" })
    }
});

//* UPDATE POST
router.patch("/:postId", async (req, res)=> {
    try {
        await Post.updateOne({_id: req.params.postId}, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        const posts = Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({message: "ino peida nakardam"})
    }
})

module.exports = router;