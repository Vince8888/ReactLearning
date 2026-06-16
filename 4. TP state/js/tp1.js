const { useState } = React;

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}> Add</button >
            <p>{count}</p>
        </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
