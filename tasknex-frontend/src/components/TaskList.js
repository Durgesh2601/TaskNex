import { Table, Button, Space } from "antd";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  
    const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => onUpdate(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => onDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={tasks} columns={columns} pagination={false} />;
};

export default TaskList;
