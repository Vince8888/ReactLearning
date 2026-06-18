const { useState, useEffect } = React;

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("quand count change");
    }, [count2]);



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
