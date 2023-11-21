import Loader from 'react-loaders'
import './index.scss'
import Animatedletters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
          <form>
            <ul>
                <li className='half'>
                    <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type='email' name='email' placeholder='Email' required/>
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
