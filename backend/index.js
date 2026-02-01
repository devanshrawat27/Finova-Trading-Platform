require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const {HoldingModel} = require('./model/holdingModel');
const {PositionModel} = require('./model/postionModel');
const {OrdersModel} = require('./model/ordersModel');
const User = require('./model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_please_change';

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.get('/addHoldings', async(req,res)=>{
//      let holding=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//    holding.forEach((item) => {
//      let  newholding = new HoldingModel({
//          name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//      });
//      newholding.save();
//    });

// });


// app.get('/addorders', async(req,res)=>{
//     const {OrdersModel} = require('./model/ordersModel');
//     let orders=[
//         {   
//         name: "INFY",
//         qty: 1,
//         price: 1555.45,
//         mode: "BUY",
//     },
//     {
//         name: "SBIN",
//         qty: 2,
//         price: 430.2,
//         mode: "SELL",
//     },
//     {
//         name: "TCS",
//         qty: 1,
//         price: 3194.8,
//         mode: "BUY",
//     },
//     {
//         name: "HDFCBANK",
//         qty: 1,
//         price: 1522.35,
//         mode: "SELL",
//     },
//     ];
//     orders.forEach((item) => {
//       let newOrder = new OrdersModel({
//         name: item.name,
//         qty: item.qty,
//         price: item.price,
//         mode: item.mode,
//       });
//       newOrder.save();
//     });
//     res.send("Orders added");
// });


// app.get('/addpositions', async(req,res)=>{
//     const {PositionModel} = require('./model/postionModel');
//     let positions=[{
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   }];
//     positions.forEach((item) => {
//       let newPosition = new PositionModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       });
//       newPosition.save();
//     }

//     );
//     res.send("Positions added");
// });

app.get('/allholdings',async(req,res)=>{
    const allholding= await HoldingModel.find({});
    res.json(allholding);
});

app.get('/allposition',async(req,res)=>{
    const allposition= await PositionModel.find({});
    res.json(allposition);
});

// --- Simple auth endpoints using bcrypt + JWT ---
app.post('/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'name, email and password are required' });
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    console.error('Signup error', err);
    res.status(400).json({ message: err.message || 'Signup failed' });
  }
});

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'email and password are required' });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    console.error('Login error', err);
    res.status(500).json({ message: 'Login failed' });
  }
});

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.post('/neworder', async (req, res) => {
  try {
    const neworder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    const saved = await neworder.save();
    res.status(201).json({ message: "Order created", order: saved });
  } catch (err) {
    console.error("Failed to create order:", err);
    res.status(400).json({ message: "Failed to create order", error: err.message });
  }
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection failed:", err.message);
  });
