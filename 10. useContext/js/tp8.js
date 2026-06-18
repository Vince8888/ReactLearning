const { useState } = React;
// ---------------------------------- Avatar -------------------------------
const Avatar = ({ user }) => {
    return (
        <>
            <h1>Mon Avatar :</h1>
            <h2>{user}</h2>
        </>
    )
};

// ----------------------------------- UserMenu ------------------------------
const UserMenu = ({ user }) => {
    return <Avatar user={user} />;
};

// ------------------------------------ Header -----------------------------
const Header = ({ user }) => {
    return <UserMenu user={user} />;
};

// ------------------------------------ App -----------------------------
const App = () => {
    const users = ["Julien", "Christophe", "Roby"];
    const [selectedUser, setSelectedUser] = useState(users[0]);

    return (
        <>
            <ul>
                {users.map((user, i) => (
                    <li key={i} onClick={() => setSelectedUser(user)} style={{ cursor: 'pointer' }}>{user}</li>
                ))}
            </ul>
            <Header user={selectedUser} />
        </>
    );
};
// -----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);