import connectDB from "../../../middleware/mongodb";
import Users from "../../../models/Users";

const handler = async (req, res) => {

    switch (req.method) {
        case 'GET':
            try {
                const allUsers = await Users.find({})            
                res.status(200).json({ 'data': allUsers, 'meta': { 'count': allUsers.length }})
            } catch (error) {
                res.status(400).json({message: error.message})
            }
            break;
        case 'POST':
            
            try {
                let user = new Users({
                    id: req.body.id,
                    email: req.body.email,
                    password: req.body.password,
                    mobile: req.body.mobile,
                    fullname: req.body.fullname,
                    avatar: req.body.avatar
                })
                const response = await user.save()
                res.status(201).json({ status: true, data: response })
            } catch (error) {
                res.status(400).json({ status: false, message: error.message })
            }
            break;
       
        default:
            res.status(403).json({message: 'Method Not Allowed'})
            break;
    }
}

export default connectDB(handler)