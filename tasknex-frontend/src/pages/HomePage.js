import { useEffect } from "react";
import { getTasks } from "../api";
import { Button } from "antd";

const HomePage = () => {
  useEffect(() => {
    (async function getTasksData() {
      const response = await getTasks();
      console.log(response.data, "data");
    })();
  }, []);
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};

export default HomePage;
