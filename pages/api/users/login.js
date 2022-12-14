import connectDB from "../../../middleware/mongodb";
import Users from "../../../models/Users";

const handler = async (req, res) => {

    switch (req.method) {
        case 'POST':
            try {
                console.log(req.body)
                // fetch user and test password verification
                Users.findOne({ email: req.body.email }, function (err, user) {
                    if (err) {
                        res.status(200).json({ status: false, message: "Invalid User !" })
                    } else if (!user) {
                        res.status(200).json({ status: false, user, message: "Invalid User credentials!1" })
                    } else {
                        //matching password
                        user.comparePassword(req.body.password, function (err, isMatch) {
                            if (err) {
                                res.status(200).json({ status: false, message: err.message })
                            } else if (!isMatch) {
                                res.status(200).json({ status: false, message: "Invalid User credentials!2" })
                            } else {
                                // Success
                                user.password = undefined; // remove password field from response
                                res.status(200).json({ status: isMatch, user, message: "User logged in successfully!" })
                            }
                        });

                    }
                });

            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;

        default:
            res.status(403).json({ message: 'Method Not Allowed' })
            break;
    }
}

export default connectDB(handler)