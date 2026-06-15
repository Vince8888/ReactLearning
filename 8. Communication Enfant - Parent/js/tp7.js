const { useState } = React;

// Ici nous utiliserons un seul fichier pour les deux composants mais dans un développement opérationnel, nous créerons un fichier par composant
const Enfant = () => {
    const [saisie, setSaisie] = useState('');

    return (
        <div style={{ border: '1px solid #ccc', padding: '1em', marginTop: '1em' }}>
            <h3>Composant Enfant</h3>

        </div>
    );
};

// Parent : reçoit et affiche le message
const Parent = () => {
    const [message, setMessage] = useState('');



    return (
        <>
            <h2>Composant Parent</h2>
            <Enfant />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Parent />
);