import LogoT from '../../../assets/images/logo-t.png'
import './index.scss'

const Logo = () => {
  
 
  return (
    <div className="logo-container">
      <img
        className="solid-logo"     
        src={LogoT}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo