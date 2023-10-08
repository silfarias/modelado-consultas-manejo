import { Schema, model } from "mongoose";

const GenreSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})

export const Genre = model("Genre", GenreSchema);