const express = require("express");
const router = express.Router();
const { getFlats, addFlat } = require("../controllers/flatController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/roleMiddleware");

router.get("/", protect, getFlats);
router.post("/", protect, authorizeRole("admin"), addFlat);

module.exports = router;
