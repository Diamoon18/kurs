import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // sprawdz czy user istnieje
    const q = "SELECT * FROM c_users WHERE email = ? OR nickname = ?";

    db.query(q, [req.body.email, req.body.nickname], (err, data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("Użytkownik już istnije!")

        // haszowanie hasla i create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const role = "0";

        // o - user; 1 - admin 
        const insert_q = "INSERT INTO c_users(`nickname`, `email`, `password`, `role`) VALUES (?)"
        const values = [
            req.body.nickname,
            req.body.email,
            hash,
            role
        ]

        db.query(insert_q, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Konto zostało założone!");
        });
    });

}

export const login = (req, res) => {
   //CHECK USER
  const q = "SELECT * FROM c_users WHERE nickname = ?";

  db.query(q, [req.body.nickname], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Użytkownik nie istnieje!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Niepoprawny nickname lub hasło!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.cookie("access_token", token, {
        httpOnly: true,
      }).status(200).json(other);
  });
}
// React How to Fetch MySQL Data
export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("Wylogowano.")
}