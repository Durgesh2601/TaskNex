import { useEffect, useState } from "react";
import { Form, message } from "antd";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import { createTask, getTasks } from "../api";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    // Fetch tasks data from the API
    try {
      (async function getTasksData() {
        const response = await getTasks();
        const { data = [] } = response || {};
        setTasks(data);
      })();
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch tasks");
    }
  }, []);

  const handleFormSubmit = async (values) => {
    // Handle form submission (create or update task)
    // Update the 'tasks' state accordingly
    try {
      setIsBtnLoading(true);
      const response = await createTask(values);
      const updatedData = [...tasks, response?.data];
      setTasks(updatedData);
      form.resetFields();
      setIsBtnLoading(false);
    } catch (error) {
      setIsBtnLoading(false);
      console.error(error);
      message.error("Oops! Failed to create task.");
    }
  };

  const handleTaskUpdate = (task) => {
    // Handle task update (set the selected task in the form)
    setSelectedTask(task);
  };

  const handleTaskDelete = (task) => {
    // Handle task deletion
    // Update the 'tasks' state accordingly
  };

  const handleFilterChange = (value) => {
    // Handle filter change
    setFilter(value);
  };

  return (
    <div>
      <TaskForm
        onSubmit={handleFormSubmit}
        initialValues={selectedTask}
        form={form}
        isBtnLoading={isBtnLoading}
      />
      <TaskFilter onChange={handleFilterChange} />
      <TaskList
        tasks={tasks.filter((task) =>
          filter === "All" ? true : task.status === filter
        )}
        onUpdate={handleTaskUpdate}
        onDelete={handleTaskDelete}
      />
    </div>
  );
};

export default HomePage;
