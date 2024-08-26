import {useState} from 'react'

export default function CreatePost(props){

    //Informacion de los posts
    const [formInfo,setFormInfo] = useState(
        {
            text: "",
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

        const newPost = [formInfo.text]

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