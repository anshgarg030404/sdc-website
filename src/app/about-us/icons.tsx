"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Card  from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';
import Insta_1 from "../../../public/insta-1.svg"
const icon = (
  <Card className="w-20 h-20">                  
        <div className='flex justify-evenly'>
        <Image
                priority
                src={Insta_1}
                alt='Instagram'/> 
           
        </div>
    
  </Card>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
    <div className='flex flex-col'>
        <h1 className="uppercase">Follow us</h1>
        <Box className="flex h-20 " >
        <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
            />
        <Box sx={{ display: '' }}>

            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            >
            {icon}
            </Grow>
        </Box>
        </Box>
    </div>
            </>
  );
}
