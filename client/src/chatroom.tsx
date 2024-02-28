import { useEffect, useState } from "react";
import io from 'socket.io-client';


export default function ChatRoom(){
    const [socket, setSocket] = useState<any>(null);
    const [message, setMessage] = useState<string>('');
    const [chat, setChat] = useState<any[]>([]);
    const [user, setUser] = useState<any>('') 
   
    
    useEffect(()=>{
        const username = localStorage.getItem("username");
        setUser(username);
      const newSocket = io('http://localhost:4000')
      setSocket(newSocket);
        
      newSocket.on('message', (message)=>{
        setChat((oldchat:any[])=>[...oldchat, message])
      })
  
      return()=>{
        newSocket.disconnect();
      }
  
    },[])
  
    const sendMessage = ()=>{
      if(!socket){
        console.error('Socket not initialized');
        return;
      }
  
      console.log(message);
      
      socket.emit('message', message);
      setMessage('');
    }
    
     return (
      <div>
        <div>
        <h1>React Socket.IO Example</h1>
        
      </div>
        <div style={{width:400, height:400, border:'2px solid black'}}>
         {chat.map((x, index)=>(
          <div key={index}>
            <p>{user}</p><p>{x}</p>
          </div>
         ))}
        </div><br/>
        <div>
          <input type="text" placeholder='type something ...' onChange={e=>setMessage(e.target.value)} />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    )
}