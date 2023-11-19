import { useEffect, useState } from "react";
import { Form, message } from "antd";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import ActionModal from "../components/ActionModal";
import { createTask, getTasks } from "../api";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [modalType, setModalType] = useState("Create");
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
      setShowModal(false);
    } catch (error) {
      setIsBtnLoading(false);
      console.error(error);
      message.error("Oops! Something went wrong. Please try again.");
    }
  };

  const handleTaskUpdate = (task) => {
    // Handle task update (set the selected task in the form)
    form.setFieldsValue(task);
    setSelectedTask(task);
    setModalType("Update");
    setShowModal(true);
  };

  const handleTaskDelete = (task) => {
    setModalType("Delete");
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleFilterChange = (value) => {
    // Handle filter change
    setFilter(value);
  };

  const handleCloseModal = () => {
    // Handle close modal
    setShowModal(false);
    setSelectedTask(null);
    form.resetFields();
  };

  const handleAddTask = () => {
    // Handle add task (show modal)
    setModalType("Create");
    setShowModal(true);
  };

  return (
    <div>
      <Header onAddTaskClick={handleAddTask} />
      <TaskFilter onChange={handleFilterChange} />
      <TaskList
        tasks={tasks.filter((task) =>
          filter === "All" ? true : task.status === filter
        )}
        onUpdate={handleTaskUpdate}
        onDelete={handleTaskDelete}
      />
      {showModal && (
        <ActionModal
          showModal={showModal}
          handleClose={handleCloseModal}
          action={modalType}
          form={form}
          onFinish={handleFormSubmit}
          isBtnLoading={isBtnLoading}
        >
          <TaskForm modalType={modalType} />
        </ActionModal>
      )}
    </div>
  );
};

export default HomePage;
