const { useState } = React;

// Child component
const AddTask = () => {
    const [taskText, setTaskText] = useState('');

    return (
        <div>
            <h3>Nouvelle tâche pour </h3>

        </div>
    );
};

// Parent component
const App = () => {

    return (
        <div>
            <h1>Tâches pour {selectedUser}</h1>

            <h2>Choisir un membre :</h2>

            <ul>
            </ul>

            <hr />

            <AddTask />

            <hr />

            <h2>Liste de tâches</h2>

            <ul>
            </ul>
        </div>
    );
};

// Entry point
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);