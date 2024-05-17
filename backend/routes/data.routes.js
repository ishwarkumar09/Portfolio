import express from "express";
import {
  About,
  Contact,
  Experience,
  Intro,
  Project,
} from "../models/portfolio.models.js";

const router = express.Router();

// get all Portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();

    // Combine the data into a single object for a more structured response
    const portfolioData = {
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
    };

    res.status(200).json(portfolioData);
  } catch (error) {
    console.error("Error in fetching portfolio data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// update intro

router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!intro) {
      return res
        .status(404)
        .json({ success: false, message: "Intro not found" });
    }

    res.status(200).json({
      success: true,
      data: intro,
      message: "Intro updated successfully",
    });
  } catch (error) {
    console.error("Error in updating Intro:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!about) {
      return res
        .status(404)
        .json({ success: false, message: "about not found" });
    }

    res.status(200).json({
      success: true,
      data: about,
      message: "about updated successfully",
    });
  } catch (error) {
    console.error("Error in updating about:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

//add experience

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();

    if (!experience) {
      return res
        .status(404)
        .json({ success: false, message: "new Experience not found" });
    }

    res.status(200).json({
      success: true,
      data: experience,
      message: "new Experience Added",
    });
  } catch (error) {
    console.error("Error in Adding experience:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Update experience

router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    if (!experience) {
      return res
        .status(404)
        .json({ success: false, message: "Experience not found" });
    }

    res.status(200).json({
      success: true,
      data: experience,
      message: "Experience Updated Successfully",
    });
  } catch (error) {
    console.error("Error in Updating experience:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });

    if (!experience) {
      return res
        .status(404)
        .json({ success: false, message: "Experience not found" });
    }

    res.status(200).json({
      success: true,
      data: experience,
      message: "Experience Deleted Successfully",
    });
  } catch (error) {
    console.error("Error in Deleting experience:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
