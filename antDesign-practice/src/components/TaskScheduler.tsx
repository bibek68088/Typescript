import { Button, Input, message, Select } from "antd";
import { useState } from "react";

interface Task {
  id: number;
  task: string;
  priority: string;
  deadline: string;
  done: boolean;
}

const TaskScheduler = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [priority, setPriority] = useState<string>("Top");
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (value: string) => {
    setPriority(value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      message.error("Please enter a task and select a valid deadline");
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      message.error("Please select a future date for a deadline.");
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      task,
      priority,
      deadline,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("Top");
    setDeadline("");
  };

  const markDone = (id: number) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const upcomingTasks = tasks.filter((t) => !t.done);

  return (
    <div>
      <h2 className="flex justify-center my-10 font-bold text-3xl">
        Task Scheduler
      </h2>
      <main className="border flex-col justify-center mx-auto my-10 w-7/12 rounded-lg shadow-2xl p-4">
        <div className="flex gap-3 justify-center mx-auto items-center my-4">
          <Input
            type="text"
            placeholder="Enter a task..."
            className="w-60"
            value={task}
            onChange={handleTaskChange}
          />
          <Select
            placeholder="Select a priority"
            className="w-56"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="Top">Top Priority</Select.Option>
            <Select.Option value="Normal">Normal Priority</Select.Option>
            <Select.Option value="Low">Low Priority</Select.Option>
          </Select>
          <Input
            type="date"
            className="w-44"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <Button className="bg-green-600 text-white w-32" onClick={addTask}>
            Add Task
          </Button>
        </div>

        <div className="flex flex-col gap-10">
          <section className="">
            <h2 className="ml-20 p-4 my-6 text-xl font-semibold">
              Upcoming Tasks
            </h2>
            <div className="flex justify-center">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-14">Task Name</th>
                    <th className="py-2 px-14">Priority</th>
                    <th className="py-2 px-14">Deadline</th>
                    <th className="py-2 px-14">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingTasks.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="py-2 px-14">{t.task}</td>
                      <td className="py-2 px-14">{t.priority}</td>
                      <td className="py-2 px-14">{t.deadline}</td>
                      <td className="py-2 px-14">
                        {!t.done && (
                          <Button className="bg-red-500 text-white" onClick={() => markDone(t.id)}>Mark Done</Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="ml-20 p-4 my-6 text-xl font-semibold">
              Completed Tasks
            </h2>
            <div className="flex justify-center">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-14">Task Name</th>
                    <th className="py-2 px-14">Priority</th>
                    <th className="py-2 px-14">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {completedTasks.map((ct) => (
                    <tr key={ct.id} className="border-b">
                      <td className="py-2 px-14">{ct.task}</td>
                      <td className="py-2 px-14">{ct.priority}</td>
                      <td className="py-2 px-14">{ct.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TaskScheduler;
