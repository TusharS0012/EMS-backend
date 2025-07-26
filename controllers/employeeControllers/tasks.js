// controllers/employeeControllers/task.js
import Task from "../../models/taskModel.js"; // Import the Task model

export const getMyTasks = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employee = await Task.find({ assignedTo: employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "My tasks fetched successfully", tasks: employee });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching my tasks",
      error: error.message,
    });
  }
};

export const updateTaskStatus = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    const { status } = req.body;
    if (!status) {
      return res
        .status(400)
        .json({ message: "All fields (status) are required" });
    }
    task.status = status;
    await task.save();
    res.status(200).json({ message: "Task status updated successfully", task });
  } catch (error) {
    res.status(500).json({
      message: "Error updating task status",
      error: error.message,
    });
  }
};
