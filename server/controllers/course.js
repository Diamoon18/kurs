import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getCourses = (req, res) => {
  const q = "SELECT * FROM courses";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};


export const getCourse = (req, res) => {
    const q =
    "SELECT course_id, `name`, `content`, image_url FROM courses WHERE course_id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};


export const addCourse = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q =
        "INSERT INTO courses(`name`, `content`, `image_url`) VALUES (?)";

        const values = [
            req.body.name,
            req.body.content,
            req.body.image_url
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Course has been created.");
        });
  });
};

export const deleteCourse = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const courseId = req.params.id;
    const q = "DELETE FROM courses WHERE `course_id` = ?";

    db.query(q, [courseId], (err, data) => {
      if (err) return res.status(403).json("Only admin can delete course!");

      return res.json("Course has been deleted!");
    });
  });
};

export const updateCourse = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const courseId = req.params.id;
        const q =
        "UPDATE courses SET `name`=?, `content`=?, `image_url`=? WHERE `course_id` = ?";

        const values = [
          req.body.name,
          req.body.content,
          req.body.image_url
        ];

        db.query(q, [...values, courseId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post has been updated.");
        });
  });

};

