import express from "express";
import {
  CreateTodo,
  readTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todos.js";

const router = express.Router();
router.get("/", readTodos);
router.post("/", CreateTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
