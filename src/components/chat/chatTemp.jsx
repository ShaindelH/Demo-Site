import Select from 'react-select';
import { useState } from 'react';
import SendIcon from "@mui/icons-material/Send";
//import { useInterval } from "../hooks/use-interval";
import { FormControl, TextField, Button, MenuItem } from '@mui/material';
import "./chat.css";

export const ChatTemp = () => { 

    const [chats, setChats] = useState([{id: 1, name:'New Chat'}, {id: 2, name: 'CompSci'} , {id: 3, name: 'Touro'}]);
    const [messages, setMessages] = useState([{chatId: 1, username: 'newUser', text: 'hi'}, {chatId: 1, username: 'shaindy', text: 'wsp?'}, {chatId:1, username: 'newUser', text: 'nm'}]);
    const [currChat, setChatId] = useState({id: 1, name: 'New Chat'});
    const [inputText, setInputText] = useState('');
   

    const handleChatChange = selectedChat => {

        setChatId(selectedChat);
    }

    function addMessage (props) {
        //putMessage
    }

    return(
        <div className="chatRoom">
            
                <div>
                    <h1>Chat Room</h1>
                </div>
                <ChatList chats={chats} handleChatChange = {handleChatChange} />
                <div>Chat Name: {currChat.name}</div>
                
                {/* <Message messages={messages} currChat={currChat.id} />*/}
                {messages.map((message) => (<Message text={message.text} username={message.username}/>))}
                <TextField id="outlined-basic" variant="outlined" size= "small"
                 placeholder = "Enter Message"
                onChange={(event) => setInputText(event.target.value)}
                />
                <Button variant="contained" onClick={() => addMessage(inputText)} endIcon={<SendIcon />}>Send</Button>
        </div>
    );
}
const Message = (props) => {

    return(<div>{props.username} : {props.text}</div>);
}


const ChatList = (props) => {
    //
    return(
        <FormControl>
        <Select 
        placeholder={"Chat Room"} 
        onChange ={props.handleChatChange}
        options ={props.chats}
        >
            
   </Select>
   </FormControl>
    );

    //{props.chats.map((chat) => <MenuItem value={chat.id}>{chat.name}</MenuItem>)}      
}

