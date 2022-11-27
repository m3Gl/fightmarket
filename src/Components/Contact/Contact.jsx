import React, {useState} from "react"
import './Contact.css'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_id');
const Contact = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [emailSent, setEmailSent] = useState(false);

const submit = () => {
    if (name && email && message) {
        const serviceId = 'service_shzp4cl';
            const templateId = 'template_mbuo7pp';
            const userId = 'EOryKyl0oDBDYutap';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}



    return (
        <div id="contact-form">
            <input type="text" placeholder="Your name" value={name} onChange={event => setName(event.target.value)}/>
            <input type="text" placeholder="Your email" value={email} onChange={event => setEmail(event.target.value)}/>
            <textarea placeholder="Your message" value={message} onChange={event => setMessage(event.target.value)}></textarea>
            <button onClick={submit}>Send message</button>
            <span className={emailSent ? 'visible' : null} >Thank you for your message, we will be in touch in no time!</span>
        </div>
    )
}

export default Contact