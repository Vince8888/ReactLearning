const { useState } = React;

const App = () => {
    const [name, setName] = useState('Max');
    const [handle, setHandle] = useState(true);

    const change = () => {
        setName(handle == false ? 'Elise' : 'Max');
        setHandle(!handle);
    }
    console.log('Rendu du composant');

    return (
        <>
            <button onClick={change}>Change Name</button>
            <h1>Hello {name}</h1>
        </>
    )
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <App />
)


