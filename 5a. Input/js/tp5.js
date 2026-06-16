const { useState } = React;
const App = () => {
    const [nom, setNom] = useState('');
    return (
        <>
            <input value={nom} onChange={(event) => setNom(event.target.value)} />
            <ul>
                <li>Nom : {nom}</li>
            </ul>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
