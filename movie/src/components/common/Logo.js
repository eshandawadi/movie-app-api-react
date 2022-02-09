import logo from '../../assets/images/logo.png'
import link, { Link } from 'react-router-dom';
export const Logo = ()=>{
    return <div className="logo">
        
    <Link to={"/"}><img src={logo} alt="logo" className={"image-contain-center"} height={'60'} width={200}/></Link>
    </div>
}