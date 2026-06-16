const { useState } = React;

const App = () => {
    const [list, setList] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ]);
    const listItems = list.map((item, i) => <li key={i}>{item.name}</li>)

    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
