import Products from '../../../models/Products'
import connectDB from '../../../middleware/mongodb'



const handler = async (req, res) => {

    switch (req.method) {
        case 'GET':
            try {
                const products = await Products.find({})            
                res.status(200).json({ 'data': products, 'meta': { 'count': products.length }})
            } catch (error) {
                res.status(400).json({message: error.message})
            }
            break;
        case 'POST':
            try {
                let temp = new Products({
                    id: req.body.id,
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.category ? req.body.category : '',
                    image: req.body.image ? req.body.image : ''
                })
                const response = await temp.save()
                res.status(201).json(response)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;
       
        default:
            res.status(403).json({message: 'Method Not Allowed'})
            break;
    }
}

export default connectDB(handler)