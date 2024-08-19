// import TableContents from "./components/TableContents"

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import ToDoList from "./components/ToDoList";
import TableContents from "./components/TableContents";
import TaskScheduler from "./components/TaskScheduler";

function App() {
  return (
    <>
      <div>
        {/* <TableContents /> */}
        {/* <ToDoList /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/tablecontent" element={<TableContents />} />
          <Route path="/taskscheduler" element={<TaskScheduler />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
