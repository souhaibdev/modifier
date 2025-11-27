import { useState } from "react";
import ItemLivre from "./ItemLivre";

function PaginationLivre(props){
    const [currentPage,setCurrentPage]= useState(1)
    const itemsPage = 3;

    const goTopgae = (page) => {
        setCurrentPage(page)
    }

    const lastItem = currentPage*itemsPage;
    const firstItem = lastItem - itemsPage;
    const currentItems = props.livres.slice(firstItem,lastItem)
    const totalPages = Math.ceil(props.livres.length /itemsPage)
    return(
        <div>
        <div style={{display:"flex"}}>
            {currentItems.map((liv,index) => ( 
                <ItemLivre  key={index} 
                 title={liv.title}
                 author={liv.author}
                 publicationYear={liv.publicationYear}
                 genre={liv.genre}
                 rating={liv.rating}
                 modifie={()=>props.modifierLivre(liv)}
                 supprime={()=>props.supprimeLivre(liv.title)}
                 duplique={()=> props.dupliquerLivre(liv.title)} />
            ))}
        </div>
                {Array.from({length:totalPages},(_,i) => (
                    <button key={i} onClick={() => goTopgae(i+1)} disabled={currentPage === i+1} >
                        {i+1}
                    </button>
                ))}
        </div>
    )
}
export default PaginationLivre;