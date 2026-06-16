const { useState } = React;

// Ici nous utiliserons un seul fichier pour les deux composants mais dans un développement opérationnel, nous créerons un fichier par composant
const Child = ({ sendToParent }) => {
    const [entry, setEntry] = useState('');
    const send = () => {
        sendToParent(entry);
        setEntry('');
    }
    return (
        <div style={{ border: '1px solid #ccc', padding: '1em', marginTop: '1em' }}>
            <h3>Composant Enfant</h3>
            <input type="text" value={entry} onChange={(e) => setEntry(e.target.value)} />
            <button onClick={send}>Envoyer au parent</button>
        </div>
    );
};

// Parent : reçoit et affiche le message
const Parent = () => {
    const [message, setMessage] = useState('');

    const receiveMessage = (text) => {
        setMessage(text);
    }


    return (
        <>
            <h1>Composant Parent</h1>
            <h2>Message reçu de l'enfant : {message}</h2>
            <Child sendToParent={receiveMessage} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Parent />
)