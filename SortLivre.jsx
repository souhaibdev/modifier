import { useState } from "react"
function SortLivre(props){
    const [publicationYear,setPublicationYear]= useState("croissant")
    function sorter(e){
        const value = e.target.value;
        setPublicationYear(value);
        const sort = props.livres.slice().sort((a,b) => value === "croissant" ? a.publicationYear - b.publicationYear :b.publicationYear - a.publicationYear )
        props.setLivre(sort)
    }
     return(
        <div>
            <select value={publicationYear} onChange={sorter}>
                <option value="croissant">Croissant</option>
                <option value="decroissant">Decroissant</option>
            </select>
        </div>
    )
}
export default SortLivre;