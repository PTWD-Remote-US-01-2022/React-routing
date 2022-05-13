import { Link } from 'react-router-dom';

const Tasks = () => {
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
  return (
    <div>
      {initialTasks.map((task) => {
        return (
          <p key={task._id}>
            {task.name} -{' '}
            {<Link to={`/tasks/${task._id}`}>See more details</Link>}
          </p>
        );
      })}
    </div>
  );
};
export default Tasks;
