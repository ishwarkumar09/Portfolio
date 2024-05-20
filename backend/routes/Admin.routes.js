import express from "express"
import { User } from "../models/user.models.js";

const router = express.Router();

// admin login

router.post("/admin-login", async (req, res) => {
    try {
      const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password
      });

      user.password = " " ;
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User does not exist"
        });
      }
  
      res.status(200).json({
        data: user,
        success: true,
        message: "Login successfully"
      });
    } catch (error) {
      console.error("Error in admin-login contact:", error);
      res.status(500).json({ success: false, error: "Admin login failed" });
    }
  });
  


export default router;

