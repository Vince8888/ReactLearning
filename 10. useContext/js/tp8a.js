const { useState } = React;

const Avatar = () => {

    return (
        <>
            <h1>Mon Avatar :</h1>
            <h2></h2>
        </>
    )
};

const UserMenu = () => {
    return <Avatar />;
};

const Header = () => {
    return <UserMenu />;
};

const App = () => {
    const users = ["Julien", "Christophe", "Roby"];
    const [selectedUser, setSelectedUser] = useState(users[0]);

    return (
        <>
            <ul>
                {users.map((user, i) => (
                    <li key={i} onClick={() => setSelectedUser(user)} style={{ cursor: 'pointer' }}                    >
                        {user}
                    </li>
                ))}
            </ul>
            <Header />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);