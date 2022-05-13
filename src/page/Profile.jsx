import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Profile = ({ user }) => {
  return (
    <div>
      <Header text={`Hello ${user}`} />

      <button>
        <Link to="/">Go to home</Link>
      </button>
    </div>
  );
};
export default Profile;
