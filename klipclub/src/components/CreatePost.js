import {useState} from 'react'

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
            return [...prevData, newPost]
        })
    }
    


    return(
        <div className="createPost-container">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleForm}
                    type="text" 
                    id="post"
                    name="text"
                    placeholder="what are you thinking?" 
                    value={formInfo.text}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}