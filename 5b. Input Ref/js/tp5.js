const { useRef } = React;

//-------------------------------
// Placer le focus sur un input
//-------------------------------

// const App = () => {
//     // A utiliser lorsque l'on veut pointer l'input sans déclencher de rendu
//     const inputRef = useRef();

//     return (
//         <>
//             <input ref={inputRef} />
//             <button onClick={() => inputRef.current.focus()}>Focus</button>
//         </>
//     );
// }

//-------------------------------
// Lire la valeur d'un input
//-------------------------------

// const App = () => {
//     // A utiliser lorsque l'on veut pointer l'input sans déclencher de rendu
//     const inputRef = useRef();
//     const afficher = () => {
//         alert(inputRef.current.value);
//     }
//     return (
//         <>
//             <input ref={inputRef} />
//             <button onClick={afficher}>Afficher</button>
//         </>
//     );
// }


//-------------------------------
// Sélectionner le texte d'un input
//-------------------------------

const App = () => {
    // A utiliser lorsque l'on veut pointer l'input sans déclencher de rendu
    const inputRef = useRef();
    const select = () => {
        inputRef.current.select();
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={select}>Sélectionner</button>
        </>
    );
}
//-------------------------------
// Récupérer des informations d'un input
//-------------------------------

// const largeur = inputRef.current.offsetWidth;
// inputRef.current.scrollIntoView();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
