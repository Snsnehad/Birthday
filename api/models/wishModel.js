import mongoose from "mongoose"

const wishSchema = mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
    wish:{
      type: String,
      required: true,
    }
  }
)

export const Wish = mongoose.model('Wish',wishSchema )