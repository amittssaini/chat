import React, { useEffect, useState } from 'react'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:8082',{transports:['websocket']})
const Chat = () => {
const [totalClients,setTotalClients]=useState(0);
const [message,setMessage]=useState('');


useEffect(()=>{
io.on('connect',()=>window.alert('A new User is connect'))
})
   
  return (<div>
     <h1 class="title">iChat 💬</h1>
    <div class="main">
      <div class="name">
        <span><i class="far fa-user"></i></span>
        <input
          type="text"
          id="name-input"
          class="name-input"
          value="anonymous"
          maxlength="20"
        />
      </div>

      <ul class="message-container" id="message-container">
    
    <li class="message-left">
          <p class="message">
            lorem impsun
            <span>bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li class="message-right">
          <p class="message">
            lorem impsun
            <span>bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li class="message-feedback">
          <p class="feedback" id="feedback">✍️ killer is typing a message...</p>
        </li> 
      </ul>

      <form class="message-form" id="message-form">
        <input
          type="text"
          name="message"
          id="message-input"
          class="message-input"
          placeholder='Enter the Message'
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <div class="v-divider"></div>
        <button type="submit" class="send-button">
          send <span><i class="fas fa-paper-plane"></i></span>
        </button>
      </form>
    </div>
    <h3 class="clients-total" id="client-total">Total clients: </h3>
  </div>)
}

export default Chat