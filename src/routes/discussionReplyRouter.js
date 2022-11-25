const express = require("express");
const router = express.Router();
const upload = require('multer')();
const {
    createReply,
    deleteReply,
    getDiscussionReply,
    getUserDicussionReply
} = require("../controller/discussionReplyController");
const asyncHandler = require("../utils/asyncHandler");
const verifyToken = require('../middleware/auth')
router.route("/:id").post(verifyToken, upload.any(), asyncHandler(createReply));
router.route("/:id").get(verifyToken, asyncHandler(getDiscussionReply));
router.route("/").get(verifyToken, asyncHandler(getUserDicussionReply));
router.route("/:id").delete(verifyToken,asyncHandler(deleteReply));
module.exports = router;
