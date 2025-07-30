module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        console.log("User in not logged in")
        return res.send("Not Authorized");  
    } else {
        next();
    }
 }