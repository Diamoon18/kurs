import express  from "express";
import {
    addCourse,
    deleteCourse,
    getCourse,
    getCourses,
    updateCourse,
  } from "../controllers/course.js";
  
const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourse);
router.post("/", addCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", updateCourse);


export default router;