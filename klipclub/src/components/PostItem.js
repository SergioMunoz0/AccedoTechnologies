import {useState} from 'react'
import profilePicture from '../assets/profilePhoto.jpg'
import "../styles/css/postitem.css"
import "../styles/css/main.css"

export default function PostList(props){

    //datos simulados para los likes, comments y shares
    const [socialNumbers,setSocialNumbers] = useState({
            Likes: 0,
            comments: 0,
            shares: 0,
            isSet: false
        })
    
    function handleSocialNumber(){
        if(!socialNumbers.isSet){
            setSocialNumbers({
                Likes: Math.floor(Math.random() * 1000),
                comments: Math.floor(Math.random() * 1000),
                shares: Math.floor(Math.random() * 1000),
                isSet: true
            })
        }
    }


    return(
        <div className="postItem-container">
            <div className="postItem-userInfo">
                <img className="profilePicture" src={profilePicture} alt="ProfilePicture" />
                <p> Sergio Carrillo</p>
            </div>

            <div className="postItem-main">
                <p>{props.text}</p>
            </div>

            <span className="divisorLine"></span>

            <div className="postItem-socialOptions">
                {handleSocialNumber()}
                <span>{socialNumbers.Likes} Likes</span>
                <span>{socialNumbers.comments} comments</span>
                <span>{socialNumbers.shares} shares</span>   
            </div>
            
        </div>
    )
}