import { useState } from "react";
function FiltrerLivre(props){
    const [genre,setGenre] = useState("")
    function filterer(e){
        const value = e.target.value.toLowerCase();
        setGenre(e.target.value);
        if (value.trim() === "" || value.trim() === "all" ) {
            props.setLivre(props.livres); 
            return;
        }
        const filtere = props.livres.filter((liv) => (liv.genre.toLowerCase().includes(value)))
        props.setLivre(filtere)
    }
    return(
        <div>
            <input type="text" value={genre} onChange={filterer}/>
            <select value={genre} onChange={filterer}>
                <option value="all">All</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Classic">Classic</option>
                <option value="Romance">Romance</option>
                <option value="Adventure">Adventure</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Philosophical Fiction">Philosophical Fiction</option>
            </select>
        </div>
    )
}
export default FiltrerLivre;