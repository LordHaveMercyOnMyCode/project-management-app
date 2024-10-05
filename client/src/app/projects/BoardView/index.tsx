import { useGetTasksQuery } from "@/lib/store/state/api";

type BoardProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};
const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ id, setIsModalNewTaskOpen }: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });

  console.log(tasks);

  return (
    <>
      <h1>Board View</h1>
    </>
  );
};

export default BoardView;
