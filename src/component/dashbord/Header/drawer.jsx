import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { SlMenu  } from "react-icons/sl";
export default function TemporaryDrawer() {
  const [open,setOpen] = useState(false);

  return (
    <div>

          <Button onClick={()=>setOpen(true)}> <span className='menuicon'><SlMenu/></span> </Button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className='drawer_slider'>
           <a href="">
                <p>Home</p>
            </a>
            <a href="">
                <p>Compare</p>
            </a>
            <a href="">
                <p>Whatchlist</p>
            </a>
            <a href="">
                <p>Dashboard</p>
            </a>
           </div>
          </Drawer>

    </div>
  );
}