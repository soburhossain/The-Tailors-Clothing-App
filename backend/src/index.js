import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
// dotenv configuration:
dotenv.config();
// creating express app:
const app = express();
// Using middlewares:
app.use(cors());
app.use(express.json());

// Connecting to database:
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successfully connected to DB"))
  .catch(() => console.log("DB connection failed!"));

// Creating mongoose userSchema:
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true, // Ensure unique email
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hashing password before saving it to database:
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Creating user model:
const Customer = mongoose.model("Customer", userSchema);

// Create the order schema for MongoDB
const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        id: String,
        title: String,
        colors: String,
        imageUrl: String,
        quantity: Number,
        unitPrice: Number,
        totalPrice: Number,
        inStock: Boolean,
      },
    ],
    customerInfo: {
      name: String,
      phone: String,
      address: String,
      location: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
// Creating user router:
const userRouter = express.Router();

// Creating sign up route:
userRouter.post("/signup", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    // Checking whether user exists or not.
    const customerExist = await Customer.findOne({ email });
    if (customerExist) {
      return res.status(201).json({ msg: "User already exists." });
    }
    // Creating a new user:
    const user = new Customer({ userName, email, password });
    await user.save();
    res.status(201).json({ msg: "Registered successfully!" });
  } catch (error) {
    console.log("Server Issues.", error);
    res.status(500).json({ msg: "Server issues!" });
  }
});

// Login a user:
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(201).json({ msg: "User does not exist." });
    }
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(201).json({ msg: "Invalid email or password." });
    }
    const token = jwt.sign(
      { id: customer._id, email: customer.email },
      process.env.JWT_TOKEN,
      { expiresIn: "10d" }
    );

    res.status(201).json({ msg: "Logged in successfully", token, customer });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ msg: "Server error." });
  }
});
// Route to create a new order
userRouter.post("/order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all orders (for the admin panel)
userRouter.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating the user route:
app.use("/api/customer", userRouter);

// Creating port:
const port = process.env.PORT || 5000;

// Listening to the app:
app.listen(port, () =>
  console.log(`Listening to port number:${port} successfully`)
);
