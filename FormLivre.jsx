import { useState } from "react";
function FormLivre(props){
    const [image,setImage] = useState("")
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState([""]);
    const [publicationYear,setPublicationYear] = useState(1500);
    const [genre,setGenre] = useState("");
    const [rating,setRating] = useState("");

    const [showForm,setShowForm] = useState(false)  //hadi de show 

    function imagechange(e){
        setImage(e.target.files[0])
    }

    function titleChange(e){
        setTitle(e.target.value)
    }

    function authorChange(e,index){
        const modifier = [...author]
        modifier[index] = e.target.value
        setAuthor(modifier)
    }

    function publicationYearCahnge(e){
        setPublicationYear(e.target.value)
    }

    function genreChange(e){
        setGenre(e.target.value)
    }

    function ratingChange(e){
        setRating(e.target.value)
    }

    function supprimerInput(index){
        const filtree = author.filter((_,aut) => aut !== index )
        setAuthor(filtree)
    }

    function ajouterInput(){
        setAuthor([...author, ""])
    }

    function shows(){
        if(props.livreAModifier){
            setTitle(props.livreAModifier.title)
            setAuthor(props.livreAModifier.author)
            setPublicationYear(props.livreAModifier.publicationYear)
            setGenre(props.livreAModifier.genre)
            setRating(props.livreAModifier.rating)
        }
        setShowForm(!showForm)
    }

    function Enregistrer(){
        const nouveauLivre = {
            img : image? URL.createObjectURL(image) : props.livreAModifier?.img,
            title,
            author,
            publicationYear,
            genre,
            rating,  
        }

        if(props.livreAModifier){
            props.modifierLivre(nouveauLivre)
        }
        else{
            props.ajoute && props.ajoute(nouveauLivre);
            alert("ajouter avec succes!")
        }
        setShowForm(false)
    }

    


    return(
        <div>
            {/* //hadi de show */}
            <button onClick={shows}>{showForm === true ? "fermer" : "ouvrir"}</button>       
            

            {showForm && (     //hadi de show
            <div>
            <label>Image : </label>
            <br />
            <input type="file"  onChange={imagechange}/>
            <br /><br />
            <label>Title : </label>
            <br />
            <input type="text" value={title} onChange={titleChange}/>
            <br /><br />
            <label>author : </label>
            <br />
                {author.map((auto,index)=> (
            <div>
            <input key={index} type="text" value={auto} onChange={(e) => authorChange(e,index)}/>
            <button onClick={() => supprimerInput(index)}>supprimer input</button>
            </div>
            ))}
            <br />
            <button onClick={ajouterInput}>ajouter input</button>
            <br /><br />
            <label>Date Publication : </label>
            <br />
            <input type="number" value={publicationYear} onChange={publicationYearCahnge}/>
            <br /><br />
            <label>Genre : </label>
            <br /><br />
            <select value={genre} onChange={genreChange}>
                <option value="Dystopian">Dystopian</option>
                <option value="Classic">Classic</option>
                <option value="Romance">Romance</option>
                <option value="Adventure">Adventure</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Philosophical Fiction">Philosophical Fiction</option>
            </select>
            <br /><br />
            <label>Rating : {rating} </label>
            <br />
            <input type="range" value={rating} onChange={ratingChange} min={1} max={5} step={0.5}/>
            <br /><br />
            <button onClick={Enregistrer}>Enregistrer</button>
        </div>
    )}
        </div>
    )
}
export default FormLivre;