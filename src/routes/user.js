const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("./../middleware/auth");
const User = require("../model/User");
const axios = require("axios");
/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    [
        check("username", "Por favor, entra un nickname válido")
        .not()
        .isEmpty(),
        check("email", "Por favor, entra un email válido").isEmail(),
        // check("password", "Por favor, entra una contraseña válida de más de 3 dígitos").isLength({
        //     min: 3
        // })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            username,
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "Este usuario ya existe..."
                });
            }

            user = new User({
                username,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            console.info(password)
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error al guardar");
        }
    }
);


router.post(
    "/login",
    [
      check("email", "Por favor, entra un email válido").isEmail(),
      // check("password", "Por favor, entra un password válido").isLength({
      //   min: 3
      // })
    ],
    async (req, res) => {
      //Intentando definir la cabecera sin éxito
      res.type('application/json');
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "El usuario no existe"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Contraseña erronea!"
          });
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
              user
            });
            console.log(token);
            console.log(user);
          }
        );
        console.log("ESTAMOS DENTRO")
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  );

  //Get Logged User
  //Obtenemos el usuario usando el token generado. Lo pasamos en la cabecera
  //Hemos añadido el parámetro auth en la ruta --> creamos la función en middleware/auth.js

  router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error al recuperar el usuario" });
    }
  });

  router.put("/update/:id",

  [
    check("username", "Por favor, entra un nickname válido")
    .not()
    .isEmpty(),
    check("email", "Por favor, entra un email válido").isEmail(),
  ],

  async (req, res) =>{

    let id = req.params.id
    let userData = req.body
    await User.findByIdAndUpdate(id, userData, (err, userUpdated) => {
      if (err) res.status(500).send({message: "Error al actualizar usuario"})
      res.status(200).send({ user: userUpdated }) 
    
  
    });
   

  });
module.exports = router;