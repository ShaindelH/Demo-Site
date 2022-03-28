import React from 'react';
import './ChatBubble.css';

export const ChatBubble = (props) => {
  
    if(props.messages === undefined){
      return;
    }

    return (
      props.messages.slice(0).reverse().map((message) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if(message.username === props.user){
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }
      return(
        <div className="chats">
        <div className="chat-list">
            <div className={`bubble-container ${bubbleDirection}`}>
            <img className={`img-circle`} src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=''/>
            <div className={`bubble ${bubbleClass}`}>{message.text}</div>
            </div>
        </div>
      </div>
      );
    })); 
}
