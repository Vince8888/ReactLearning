const { useState } = React;

const App = () => {
    const [liste, setListe] = useState([
        { id: 1, nom: "Alice" },
        { id: 2, nom: "Bob" },
        { id: 3, nom: "Charlie" }
    ]);

    return (
        <>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
