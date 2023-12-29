
import { Link } from 'react-router-dom';
import Button from '../../button';
import TemporaryDrawer from './drawer';
import './style.css';

const Header = () => {
  return (
    <div className="nav">
        <Link to="/"><h1 className="logo">CryptoTracker <span>.</span></h1></Link>
        <div className="link">
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/compare">
                <p>Compare</p>
            </Link>
            <Link to="/watchlist">
                <p>Watchlist</p>
            </Link>
            <Link to="/dashboard">
                <Button text={"Dashboard"} onClick={()=>console.log("lkds")}/>
            </Link>
        </div>
        <div className='drawer'>
            <TemporaryDrawer/>
        </div>
    </div>
  );
};

export default Header;
