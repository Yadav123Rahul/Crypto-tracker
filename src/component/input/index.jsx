import './style.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function CustomInput({searchInput}) {
  return (
    <div className='search_area'>
        <SearchRoundedIcon/>
        <input onChange={(e)=>searchInput(e.target.value)} className='myinput' type="text" placeholder='Search Here.......' />
    </div>
  )
}

export default CustomInput