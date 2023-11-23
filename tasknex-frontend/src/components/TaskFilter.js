import { Select, Row } from "antd";

const { Option } = Select;

const TaskFilter = ({ onChange, filter }) => {
  const handleChange = (value) => {
    // Handle filter change
    onChange(value);
  };

  const selectStyle = {
    width: "8rem",
  };

  return (
    <Row style={{ marginBottom: "0.5rem" }}>
      <Select
        defaultValue="All"
        value={filter}
        onChange={handleChange}
        style={{ ...selectStyle }}
      >
        <Option value="All">All</Option>
        <Option value="To Do">To Do</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="Done">Done</Option>
      </Select>
    </Row>
  );
};

export default TaskFilter;
