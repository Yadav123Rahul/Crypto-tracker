import Button from '../../button';
import './style.css';
import iphone from '../../../assets/phone 1.png';
import gradient from '../../../assets/gradient 1.png';

function MainPage() {
  return (
    <div className='hero_section'>
       <div className='info_section'>
       <h1 className='track_heading'>Track Crypto</h1>
        <h1 className='real_heading'>Real Time.</h1>
        <p className='hero_des'>Track crypto through a public api in real time. Visit teh dashboard to do so!</p>
        <div className='button_div'>
            <Button text={"Dashbaord"}/>
            <Button text={"Share"} outline={true}/>
        </div>
       </div>
       <div className='hero_right_section'>
        <img src={iphone} alt="iphone"  className='iphone'/>
        <img src={gradient} alt="gradient"  className='gradient'/>
       </div>
    </div>
  )
}

export default MainPage