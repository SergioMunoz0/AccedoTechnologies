import "../styles/css/postitem.css"

export default function PostList(props){
    return(
        <div className="postItem-container">
            <p>{props.text}</p>
        </div>
    )
}