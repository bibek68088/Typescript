import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border p-4">
      <ul className="flex justify-evenly font-mono">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todolist">To-do-List</Link>
        </li>
        <li>
            <Link to='/tablecontent'>Table Contents</Link>
        </li>
        <li>
            <Link to='/taskscheduler'>Task Scheduler</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
