import { connectToServer } from './socket-client'
import './style.css'
// import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>


    <hi>WebSockets - Cient</hi>

    <input id="jwt-token" placeholder="json web token"/>
    <button id="btn-connect">Connect</button>
    <span id="server-status">Offline</span>

    <ul id="clients-ul">
    </ul>
    
    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`


const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!

btnConnect.addEventListener('click', () => {
  if (jwtToken.value.trim().length <= 0){
    return alert('enter valid jwt')
  }
  connectToServer( jwtToken.value)
})
// connectToServer()
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
