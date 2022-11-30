import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let posts = await db.collection("products").insertOne(bodyObject);
      res.json(posts.ops[0]);
      break;
    case "GET":
      const allProducts = await db.collection("products").find({}).toArray();
      res.json({ status: 200, data: allProducts });
      break;
  }
}
