import {useState} from 'react'
import { Box,Typography,useTheme } from '@mui/material'
import FlexBetween from '../Basic/FlexBetween'
import PixIcon from "@mui/icons-material/Pix"
import { Link } from 'react-router-dom'


type Props = {}

const Navbar  = (props: Props) => {
    const {palette} =useTheme()
    const [selected,setSelected]=useState("dashboard")

  return (
    <FlexBetween mb='.25rem' p='.5rem 0rem' color={palette.grey[300]}>
       
        <FlexBetween gap=".75rem">
            <PixIcon sx={{fontSize:"28px"}}/>
            <Typography variant='h4' fontSize="16px">
                Finanseer
            </Typography>
        </FlexBetween>

        <FlexBetween gap="2rem">
            <Box> 
                <Link 
                    to="/"
                    onClick={()=>setSelected('dashboard')}
                    style={{
                        color:selected==="dashboard" ?"inherit":palette.grey[700],
                        textDecoration:"inherit"
                    }}
                    >
                    Dashboard
                </Link>
            </Box>
            <Box> 
                <Link 
                    to="/predictions"
                    onClick={()=>setSelected('predictions')}
                    style={{
                        color:selected==="predictions" ?"inherit":palette.grey[700],
                        textDecoration:"inherit"
                    }}
                    >
                        Predictions
                </Link>
            </Box>
        </FlexBetween>

    </FlexBetween>
  )
}

export default Navbar 