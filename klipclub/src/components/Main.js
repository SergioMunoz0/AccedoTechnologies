import CreatePost from "./CreatePost.js"
import PostItem from "./PostItem.js"
import {useState} from 'react'
import '../styles/css/main.css'

export default function Main(){
    //Variable que guarda los post localmente
    const [dataPosts,setDataPosts] = useState([])

    const postItems = dataPosts.map(post=>{
        return <PostItem 
                    text={post.text}
                />
        })
        
    return(
        <div className="main-container">
            <CreatePost 
                dataPosts={dataPosts}
                setDataPosts={setDataPosts}
            />
            {dataPosts.length > 0 && (
                <div className="post-container">
                    {postItems}
                </div>
            )}
        </div>
    )
}