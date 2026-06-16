const { useState } = React;

const App = () => {
    const [list, setList] = useState([
        { id: 1, name: "Alfred" },
        { id: 2, name: "Alphonse" }
    ]);
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem.trim() === '') return;
        const newObject = {
            id: crypto.randomUUID(),
            name: newItem
        };

        setList([...list, newObject]);
        setNewItem('');
    };

    return (
        <div>
            <h2>Liste des noms</h2>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.id} : {item.name}</li>
                ))}
            </ul>

            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Ajouter un nom" />
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
