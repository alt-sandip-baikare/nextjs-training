import Products from '../../../models/Products'
import connectDB from '../../../middleware/mongodb'



const handler = async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                const products = await Products.findOne({ id: req.query.id })
                res.status(200).json({ 'data': products })
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;
        case 'PUT':
            try {
                let temp = {
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.category,
                    image: req.body.image,
                    rating: {
                        $set: {
                            "rating.rate": req.body.rating.rate,
                            "rating.count" : req.body.rating.count,
                        }
                    }
                }
                let ProductId = req.query.id
                const response = await Products.findOneAndUpdate({id: parseInt(ProductId.trim()) }, { $set : temp }, {new:true} )
                res.status(202).json(response)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;

        case 'DELETE':
            try {
                const response = await Products.deleteOne({ id: req.query.id })
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