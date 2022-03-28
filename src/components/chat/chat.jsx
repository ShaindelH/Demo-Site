
import { useState } from 'react';
import Icon from '@mui/material/Icon';
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useInterval } from "../hooks/use-interval";
import {ChatBubble} from './chatBubble';
import { FormControl, TextField, Button, Card, MenuItem, Select,CardContent } from '@mui/material';
import "./chat.css";

export const Chat = () => { 

    const [chats, setChats] = useState([{}]);
    const [messages, setMessages] = useState([{}]);
    const [chatId, setChatId] = useState('bffd64d7-e003-4f77-a6b6-9a24653bef26');
    const[newChat, setNewChat] = useState('');
    const[user, setUser] = useState('');
    const [newMsg, setNewMsg] = useState('');
   
    
    useInterval(
        (params) => {
        const chatId = params[0]; 
           fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`)
             .then((response) => response.json())
             .then((data) => {
               setMessages(data.Items);
             }
            );
         },
          1000,
          chatId
       );

    function fetchChats(){
         
            fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
            .then((response) => response.json())
            .then((data) => {setChats(data.Items);
            }
        );
    }

    function addMessage () {
        const msg = {text: newMsg, username: user, chatId: chatId};

        fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages`, {
            method: "PUT",
            headers: {
             "Content-Type": "application/json", 
            },
            body: JSON.stringify(msg),
        });

        setNewMsg('');
    }

    function addChat(){
        console.log("add chat: " + newChat);

        const chat = {name: newChat};
        
        fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats', {
            method: "PUT",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify(chat),
        });
    }

    return(
        <div className="chatRoom">
            <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <h1>Chat Room</h1>
            <Stack direction="row" spacing={1}>
            <ChatList chats={chats} setChatId = {setChatId} fetchChats={fetchChats}/>  
                <TextField id="outlined-basic" variant="outlined" size= "small"
                 label = "Enter Username"
                onChange={(event) => setUser(event.target.value)}
                />
                <TextField id="outlined-basic" variant="outlined" size= "small"
                 label = "Enter New Chat"
                onChange={(event) => setNewChat(event.target.value)}
                />
                <Button onClick={addChat}>
                <Icon fontSize= 'large' >add_circle</Icon></Button>
            </Stack>
            <div className="message">
                <ChatBubble messages = {messages} user={user}/>
            </div>
                <Stack direction="row" spacing={2} id= 'addMsg'>
                <TextField id="outlined-basic" variant="outlined" size= "small"
                 placeholder = "Enter Message"
                onChange={(event) => setNewMsg(event.target.value)
                }
                value={newMsg}
                />
                <Button variant="contained" onClick={addMessage} endIcon={<SendIcon />}>Send</Button>
                </Stack>
         
        </div>
    );
}


const ChatList = (props) => {
   
return(
    <FormControl>
        <Select
          onChange={(event) => props.setChatId(event.target.value)}
          onMouseDown={props.fetchChats}
        >
          {props.chats.map((chat) => (
            <MenuItem value={chat.id}>{chat.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
        
    );

    }

