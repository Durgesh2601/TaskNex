import { Select } from "antd";

const { Option } = Select;

const TaskFilter = ({ onChange }) => {
  const handleChange = (value) => {
    // Handle filter change
    onChange(value);
  };

  return (
    <Select defaultValue="All" onChange={handleChange}>
      <Option value="All">All</Option>
      <Option value="To Do">To Do</Option>
      <Option value="In Progress">In Progress</Option>
      <Option value="Done">Done</Option>
    </Select>
  );
};

export default TaskFilter;
