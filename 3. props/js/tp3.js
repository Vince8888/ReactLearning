
const App = ({ name, color, message }) => {

    return (
        <>
            <h1 style={{ color: color }}>Hello, {name}</h1>
            <h2>{message}</h2>
        </>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <App name="Max" color="blue" message="Hello you" />
);

