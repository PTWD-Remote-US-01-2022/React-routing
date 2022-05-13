import { useParams } from 'react-router-dom';

const TaskDetail = () => {
    
  const initialTasks = [
    {
      _id: '1a',
      name: 'Trash',
      description: 'Empty trash bins in the home and take out the garbage.',
      isDone: false,
    },
    {
      _id: '2b',
      name: 'Dishes',
      description: 'Empty the dishwasher and put away the clean dishes.',
      isDone: false,
    },
    {
      _id: '3c',
      name: 'Make Bed',
      description: 'Pick up your pillows and make your bed.',
      isDone: false,
    },
  ];

  const { taskId } = useParams();

  const task = initialTasks.find((task) => task._id === taskId);

  return (
    <div>
      <p>Name : {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Done: {task.isDone ? 'Yes' : 'No'}</p>
    </div>
  );
};
export default TaskDetail;
