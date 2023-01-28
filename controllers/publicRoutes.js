//public routes like homepage, login, register, etc.

//imports
const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router
const { User, Post } = require("../models")

//HOMEPAGE ROUTES
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = postData.map((post) => post.get({plain: true}))
        console.log(posts)
        res.render("pages/homepage", { posts })
    } catch {

    }
})

//LOGIN ROUTES
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render("pages/login")
})

router.post("/login", async (req, res) => {
    try {
      // Find the user who matches the posted username
      const userData = await User.findOne({
        where: { username: req.body.username },
      });
      console.log(userData)

      if (!userData) {
        res.send(
          "<script>alert('Invalid username or password, please try again!'); window.location.href = '/login';</script>"
        );
        return;
      }
  
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
  
        res.send("<script>alert('Invalid email or password, please try again!'); window.location.href = '/login';</script>");
        return;
  
      }
  
      // Create session variables based on the logged in user -  !!! This is key for the requests that requires the current userid) !!!
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
      });

      res.redirect("/dashboard");
    } catch (err) {
      res.status(400).json(err);
    }
  });

//REGISTRATION ROUTES
router.get("/register", (req, res) => {
    res.render("pages/register")
})

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.create({
        //Credentials
        username,
        password
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = newUser.id; //passing the user id
            res.status(200).json(newUser);
        });
        res.redirect("/dashboard")
        console.log(req.session.loggedIn)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/logout", (req, res) => {
    if (req.session.loggedIn) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
      req.end;
      //redirects to homepage after logged out
      res.redirect("/login");
    } else {
      res.render("pages/404");
    }
  });

// router.post("/register", (req, res) => {
//     //destructuring the request body
//     const { username, password } = req.body //taking the values out
//     //simple validation of user inputs
//     if (!username || !password) {
//         return res.status(400).json({message: "username and password required"})
//     }
//     //this process is asynchronous
//     User.create({username, password})
//     .then((user) => {
        
//     })
//     .catch((error) => {res.status(500).json({message: "internal server error, try again later"})})
// })

module.exports = router