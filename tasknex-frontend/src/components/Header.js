import { Button, Tag } from "antd";
import { PageHeader } from '@ant-design/pro-layout';
import { PlusOutlined } from "@ant-design/icons";

const Header = ({ onAddTaskClick }) => {
  return (
    <PageHeader
      title="Task Manager"
      subTitle="Keep track of your tasks"
      extra={[
        <Button
          key="addTask"
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAddTaskClick}
        >
          Add Task
        </Button>,
      ]}
      tags={<Tag color="blue">Beta</Tag>}
    />
  );
};

export default Header;
