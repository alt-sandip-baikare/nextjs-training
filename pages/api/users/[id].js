import Users from '../../../models/Users'
import connectDB from '../../../middleware/mongodb'



const handler = async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                const user = await Users.findOne({ id: req.query.id })
                res.status(200).json({ 'data': user })
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;
        case 'PUT':
            try {
                let user = {
                    email: req.body.email,
                    password: req.body.password,
                    mobile: req.body.mobile,
                    fullname: req.body.fullname,
                    avatar: req.body.avatar                    
                }
                let UserId = req.query.id
                const response = await Users.findOneAndUpdate({id: parseInt(UserId.trim()) }, { $set : user }, {new:true} )
                res.status(202).json(response)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;

        case 'DELETE':
            try {
                const response = await Users.deleteOne({ id: req.query.id })
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({ 'message': error.message, 'id': req.query.id })
            }
            break;

        default:
            res.status(405).json({ 'message': "Method not allowed!" })
            break;
    }

}

export default connectDB(handler)