const { useState } = React;

// Child component
const AddTask = ({ selectedUser, onAddTask }) => {
    const [taskText, setTaskText] = useState('');
    const handleAddTask = () => {
        if (taskText.trim() === '') {
            return;
        }
        onAddTask(taskText);
        setTaskText('');
    };

    return (
        <div>
            <h3>Nouvelle tâche pour {selectedUser}</h3>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Saisir une tâche"
            />
            <button onClick={handleAddTask}>
                Ajouter
            </button>
        </div>
    );
};

// Parent component
const App = () => {
    const users = ["Julien", "Christophe", "Roby"];
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [tasks, setTasks] = useState([]);
    const handleUserSelection = (user) => {
        setSelectedUser(user);
    };
    const handleAddTask = (taskText) => {
        const newTask = {
            id: crypto.randomUUID(),
            user: selectedUser,
            text: taskText
        };
        setTasks((previousTasks) => [
            ...previousTasks,
            newTask
        ]);
    };

    return (
        <div>
            <h1>Tâches pour {selectedUser}</h1>
            <h2>Choisir un membre :</h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user}
                        onClick={() => handleUserSelection(user)}
                        style={{
                            cursor: 'pointer',
                            fontWeight: user === selectedUser ? 'bold' : 'normal'
                        }}
                    >
                        {user}
                    </li>
                ))}
            </ul>
            <hr />
            <AddTask selectedUser={selectedUser} onAddTask={handleAddTask} />
            <hr />
            <h2>Liste de tâches</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.user}</strong> : {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Entry point
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);