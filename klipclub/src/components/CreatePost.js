import {useState} from 'react'
import "../styles/css/utils.css"
import "../styles/css/createPost.css"


export default function CreatePost(props){

    //Informacion de los posts por ahora solo se tomara el mensaje, pero se puede agrega mas
    const [formInfo,setFormInfo] = useState(
        {
            text: ""
        }
    )

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
            "text":formInfo.text
        }

        props.setDataPosts(prevData =>{
            return [newPost, ...prevData]
        })
    }
    
    return(
        <div className="createPost-container">
            <form className="createPost-form" onSubmit={handleSubmit}>
                <textarea
                    className="textPost-input"
                    onChange={handleForm}
                    type="text" 
                    id="post"
                    name="text"
                    placeholder="what are you thinking?" 
                    value={formInfo.text}
                />
                <div className="formPost-options">
                    <button className="submitButton" type="submit">Post</button>
                </div>
            </form>
        </div>
    );
}