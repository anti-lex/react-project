import React , { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from '../images/cake.png'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_sa2ddkf',
          'template_k3g96qk',
          form.current,
          'QIGecMJ8HuCpl26B_'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
        <>
        <div className= "GridContact">
        <div className = "LeftSide">
        <h1>Contact us</h1>
        <p>Thank you for reaching out!</p>
        <p>We will try to reach out as soon as we can!</p>
        <div className="FormStyle">
        <form
              ref={form}
              onSubmit={sendEmail}
            >
            <label>Name:</label>
            <input
                type='text'
                name='from_name'
            />

            <label>Email:</label>
            <input
                type='text'
                name='email'
            />
            <label>Subject:</label>
            <input
                type='text'
                name='subject'
            />
            <label>
                <b>Email Body:</b>
            </label>
            <textarea name='message' />
            <button>Send Email</button>
        </form>
        </div>
        </div>
        <div className='RightSide'>
        <img src={Image} alt="cake"></img>
        </div>
        </div>
        </>
    )
}

export default Contact;