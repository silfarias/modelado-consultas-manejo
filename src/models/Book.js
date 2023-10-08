import { Schema, model } from "mongoose";

const BookSchema = new Schema({
    title: { type: String, required: true },
    yearPublication: { type: Number, required: true },
    coverPage: {
        type: String,
        required: true
    },
    genre: { 
        type: Schema.Types.ObjectId, 
        ref: "Genero",
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Autor",
        required: true
    }
}, {
    timestamps: true
});

export const Book = model("Book", BookSchema);
