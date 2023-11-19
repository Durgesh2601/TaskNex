import { Select } from "antd";

const { Option } = Select;

const TaskFilter = ({ onChange }) => {
  const handleChange = (value) => {
    // Handle filter change
    onChange(value);
  };

  const selectStyle = {
    width: "8rem",
  };

  return (
    <Select
      defaultValue="All"
      onChange={handleChange}
      style={{ ...selectStyle }}
    >
      <Option value="All">All</Option>
      <Option value="To Do">To Do</Option>
      <Option value="In Progress">In Progress</Option>
      <Option value="Done">Done</Option>
    </Select>
  );
};

export default TaskFilter;
