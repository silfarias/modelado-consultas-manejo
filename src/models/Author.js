import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    biography: { type: String, required: true }
}, {
    timestamps: true,
})

export const Author = model("Author", AuthorSchema);
