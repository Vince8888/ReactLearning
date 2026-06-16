const App = () => {
    // --- Code javascript éventuel ---
    let message1 = 'Hello World';
    let message2 = {
        text: 'Bienvennue',
        error: 'Au revoir'
    }

    // -----------------

    // --- Affichage Composant ---
    return (
        <>
            <h1>{message1}</h1>
            <h2>{message2.text}</h2>
        </>
    )
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <App />
);
