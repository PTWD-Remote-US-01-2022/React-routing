import { NavLink } from 'react-router-dom';

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
};

const activeStyle = ({ isActive }) => {
  return { color: isActive ? 'Red' : 'Green' };
};

const NavBar = () => {
  return (
    <>
      <div style={styles}>
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="profile" style={activeStyle}>
          Profile
        </NavLink>
        <NavLink to="tasks" style={activeStyle}>
          All Tasks
        </NavLink>
      </div>
      <hr />
    </>
  );
};
export default NavBar;
