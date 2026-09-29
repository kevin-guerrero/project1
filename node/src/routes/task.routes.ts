import express from 'express';
import { TaskService } from '../services/task.service.js';
import type { Task } from '../model/Task.js';

const router = express.Router();
const taskService: TaskService = new TaskService();
router.get('/', (req, res) => {
    try {
        const tasks: Task[] = taskService.getAllTasks();
        res.json(tasks);

    }catch (error: any) 
    {
        res.status(500).json({ message: error.message });
    }
});

export default router;
