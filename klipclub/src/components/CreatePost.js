import {useState} from 'react'
import "../styles/css/utils.css"
import "../styles/css/createPost.css"
import profilePicture from '../assets/images/profilePhoto.jpg'

export default function CreatePost(props){

    //Informacion de los posts por ahora solo se tomara el mensaje, pero se puede agrega mas
    const [formInfo,setFormInfo] = useState(
        {
            text: "",
            visibility: "publico"  //default visibility
        }
    )

    //visibilidad del post (boton)
    const [checkItem, setCheckItem] = useState("Publico")

    //para saber que tanto del create post mostrar (falso por defecto)
    const [isExtendentPost, setIsExtendentPost] = useState(false)

    function handleForm(event){
        const {name, value} = event.target
        setFormInfo(prevData =>{
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    //Se almacena localmente cada post en la variable "dataPost"
    function handleSubmit(event){
        event.preventDefault()

        //validar que el campo no este vacio
        if (formInfo.text.trim() === "") {
            alert("El campo de texto no puede estar vacío");
            return;
        }

        const newPost = {
            "text":formInfo.text,
            "visibility":formInfo.visibility
        }

        props.setDataPosts(prevData =>{
            return [newPost, ...prevData]
        })
    }

    function handleOptionList(){
        const list = document.querySelector(".visibility-list")
        list.style.display === "flex" ? list.style.display = "none" : list.style.display = "flex"
    }

    function handlePostLyout(){
        setIsExtendentPost(true)
        document.querySelector(".createPost-form").style.height = "170px"
    }

    return(
        <div className="createPost-container">
            <form className="createPost-form" onSubmit={handleSubmit}>
                <div className="imagePost-container">
                    <img className="profilePicture" src={profilePicture} alt="ProfilePicture" />
                    <textarea
                        className="textPost-input"
                        onChange={handleForm}
                        onClick={handlePostLyout}
                        type="text" 
                        id="post"
                        name="text"
                        placeholder="what are you thinking?" 
                        value={formInfo.text}
                    />
                </div>
                
                {isExtendentPost && <div className="formPost-options">
                    <div className="visibility-options" onClick={handleOptionList}>
                        <p className="checked-name">{checkItem}</p>
                        <div className='visibility-list'>
                            <input
                                onChange={handleForm}
                                type="radio"
                                id="publico"    
                                name="visibility"
                                value="publico"
                                checked={formInfo.visibility === "publico"}
                            />
                            {checkItem !== "Publico" &&  <label onClick={()=>setCheckItem("Publico")} htmlFor="publico">Publico</label>} 

                            <input
                                onChange={handleForm}
                                type="radio"
                                id="privado"
                                name="visibility"
                                value="privado"
                                checked={formInfo.visibility === "privado"}
                            />
                            {checkItem !== "Privado" &&  <label onClick={()=>setCheckItem("Privado")} htmlFor="privado">Privado</label>}

                            <input
                                onChange={handleForm}
                                type="radio"
                                id="me"
                                name="visibility"
                                value="me"
                                checked={formInfo.visibility === "me"}
                            />
                            {checkItem !== "Solo para mi" &&  <label onClick={()=>setCheckItem("Solo para mi")} htmlFor="me">Solo para mi</label>}
                        </div> 
                    </div>
                    <button className="submitButton" type="submit">Post</button>
                </div>}
            </form>
        </div>
    );
}