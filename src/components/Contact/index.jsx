import Loader from 'react-loaders'
import './index.scss'
import Animatedletters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        refForm.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`

    ).then(
        ()=>{
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        ()=>{
            alert('Failed to send the message,please try again')
        }
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animatedletters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <li className='half'>
                    <input type='text' name='from_name' placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type='email' name='from_email' placeholder='Email' required/>
                </li>
                <li>
                    <input placeholder="Subject" type="text" name="subject" required/>
                </li>
    <li>
        <textarea required placeholder='Message' name='message'></textarea>
    </li>
    <li>
        <input type='submit' className='flat-button' value="Send"/>
    </li>
            </ul>
          </form>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
