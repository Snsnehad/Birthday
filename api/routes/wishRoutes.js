import express from "express";
import mongoose from "mongoose";
import { Wish } from "../models/wishModel.js";

const router = express.Router();
// Route for save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.wish) {
      return res.status(400).send({
        message: "Send all required fields: title, author,publishYear",
      });
    }
    const newWish = {
      title: req.body.title,
      wish: req.body.wish
    };

    const wish = await Wish.create(newWish);
    return res.status(201).send(wish);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for get all books from database
router.get("/", async (req, res) => {
  try {
    const wishes = await Wish.find({});

    return res.status(200).json({
      count: wishes.length,
      data: wishes,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for get one book from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(`Received ID: ${id}`);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid wish ID" });
    }

    const wish = await Wish.findById(id);

    if (!wish) {
      console.log("Wish not found");
      return res.status(404).send({ message: "Wish not found" });
    }

    return res.status(200).json(wish);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Wish.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Wish not found" });
    }
    return res.status(200).send({ message: "Wish deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
