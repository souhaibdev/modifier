import ItemLivre from "./ItemLivre";
import FiltrerLivre from "./FiltererLivre";
import SortLivre from "./SortLivre";
import PaginationLivre from "./PaginationLivre";
import FormLivre from "./FormLivre";
import { useState } from "react";
function ListLivre(){
    const [LivreOriginale] = useState( [ 
    {"title": "1984","author": "George Orwell","publicationYear": 
1949,"genre": "Dystopian","rating": 4.8}, 
    {"title": "To Kill a Mockingbird","author": "Harper Lee","publicationYear": 1960,"genre": "Classic","rating": 4.9}, 
    {"title": "The Great Gatsby","author": "F. Scott Fitzgerald","publicationYear": 1925,"genre": "Classic","rating": 4.4}, 
    {"title": "Pride and Prejudice","author": "Jane Austen","publicationYear": 
1813,"genre": "Romance","rating": 4.7}, 
    {"title": "Moby-Dick","author": "Herman Melville","publicationYear": 
1851,"genre": "Adventure","rating": 4.1}, 
    {"title": "War and Peace","author": "Leo Tolstoy","publicationYear": 
1869,"genre": "Historical Fiction","rating": 4.5}, 
    {"title": "The Alchemist","author": "Paulo Coelho","publicationYear": 
1988,"genre": "Philosophical Fiction","rating": 4.7} 
    ])

    const [Livre,setLivre] = useState(LivreOriginale)

    function supprimerLivre(title){
        setLivre(Livre.filter(liv => liv.title !== title))
    }

    function dupliquerLivre(title){
        const livr = Livre.find(liv => liv.title === title)
        const copie = {...livr,title}
        setLivre([...Livre,copie])
    }

    function ajouteNouveauLivre(nouveaulivre){
        setLivre([...Livre,nouveaulivre])
    }

    const [livreEnEdition,setLivreEnEdition] = useState(null)

    function modifierlivre(livreModifier){
        if(!livreEnEdition) return;
        const update = Livre.map(liv => liv.title === livreEnEdition.title ? livreModifier : liv)
        setLivre(update);
        setLivreEnEdition(null)
    } 
    
    function openModifier(livre){
        setLivreEnEdition(livre);
    }
    return(
        <div>
        <div style={{display:"flex",gap:"30px",}}>
            <FormLivre ajoute={ajouteNouveauLivre}
            livreAModifier={livreEnEdition}
            modifierlivre={modifierlivre}/>

            <FiltrerLivre livres={LivreOriginale} setLivre={setLivre}/>
            <SortLivre livres={LivreOriginale} setLivre={setLivre}/>
        </div>
         <PaginationLivre livres={Livre} supprimeLivre={supprimerLivre}
         dupliquerLivre={dupliquerLivre}
         modifierLivre={openModifier} />
         </div>
    )
}
export default ListLivre;