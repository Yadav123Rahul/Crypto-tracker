
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectDays({handleChange,days}) {
  return (
    <div>
        {/* <InputLabel id="demo-simple-select-label">Days</InputLabel> */}
        <Select
            sx={{
                height:"2.5rem",
                color:"var(--white)",
                "& .MuiOutlinedInput-notchedOutline":{
                    borderColor:"var(--white)!important",
                },
                "& .MuiSvgIcon-root":{
                    color:"var(--white) !important",
                },
                "&:hover":{
                    "&& fieldset":{
                        borderColor:"#3a80e9 !important"
                    }
                }
            }}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={(event)=>handleChange(event)}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Dyas</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={240}>240 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
    </div>
  );
}