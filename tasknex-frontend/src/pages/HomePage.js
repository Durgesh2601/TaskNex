import { useEffect, useState } from "react";
import { Form, message, Skeleton } from "antd";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import ActionModal from "../components/ActionModal";
import { MODALTYPES } from "../constants";
import { createTask, deleteTask, getTasks, updateTask } from "../api";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [modalType, setModalType] = useState("Create");
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    // Fetch tasks data from the API
    try {
      (async function getTasksData() {
        setIsLoading(true);
        const response = await getTasks();
        const { data = [] } = response || {};
        setTasks(data);
        setIsLoading(false);
      })();
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch tasks");
      setIsLoading(false);
    }
  }, []);

  const handleFormSubmit = async (values) => {
    const isDelete = modalType === MODALTYPES.DELETE;

    if (isDelete) return handleDeleteTask(selectedTask);

    const methodToCall = getMethodToCall(modalType);
    if (!methodToCall) return message.error("Invalid action!");

    try {
      setIsBtnLoading(true);
      const response = await methodToCall(values, selectedTask?._id);
      const { data = {}, message: msg } = response?.data || {};
      const filteredTasks = tasks.filter((item) => item?._id !== data?._id);
      const updatedData = [data, ...filteredTasks];
      setTasks(updatedData);
      message.success(msg);
      handleCloseModal();
    } catch (error) {
      setIsBtnLoading(false);
      console.error(error);
      message.error("Oops! Something went wrong. Please try again.");
    }
  };

  const getMethodToCall = (modalType) => {
    switch (modalType) {
      case MODALTYPES.CREATE:
        return createTask;
      case MODALTYPES.UPDATE:
        return updateTask;
      default:
        return null;
    }
  };

  const handleDeleteTask = async (task) => {
    try {
      const { _id } = task || {};
      setIsBtnLoading(true);
      const response = await deleteTask(_id);
      const updatedData = tasks.filter((task) => task._id !== _id);
      setTasks(updatedData);
      message.success(response?.data?.message);
      handleCloseModal();
    } catch (error) {
      setIsBtnLoading(false);
      console.error(error);
      message.error("Oops! Could not delete task. Please try again.");
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
    setIsBtnLoading(false);
    setFilter("All");
  };

  const handleAddTask = () => {
    // Handle add task (show modal)
    setModalType("Create");
    setShowModal(true);
  };

  return (
    <div>
      <Header onAddTaskClick={handleAddTask} />
      <TaskFilter onChange={handleFilterChange} filter={filter} />
      {isLoading ? (
        <Skeleton active />
      ) : (
        <TaskList
          tasks={tasks.filter((task) =>
            filter === "All" ? true : task?.status === filter
          )}
          onUpdate={handleTaskUpdate}
          onDelete={handleTaskDelete}
        />
      )}
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
