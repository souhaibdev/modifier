function ItemLivre(props){
    function Supprimer(){
        props.supprime(props.title)
    }

    function Dupliquer(){
        props.duplique(props.title)
    }

    function Modifier(){
        props.modifie()
    }
    return(
        <div style={{width:"300px"}}>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>{props.publicationYear}</p>
            <p>{props.genre}</p>
            <p>{props.rating}</p>
            <button onClick={Modifier}>Modifier</button>
            <button onClick={Supprimer}>Supprimer</button>
            <button onClick={Dupliquer}>Dupliquer</button>
        </div>
    )
}
export default ItemLivre;