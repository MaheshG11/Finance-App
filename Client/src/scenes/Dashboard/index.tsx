import DashboardBox from '@/components/Dashboard/DashboardBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import C1 from '@/components/Dashboard/c1'
import C2 from '@/components/Dashboard/c2'
import C3 from '@/components/Dashboard/c3'
import C4 from '@/components/Dashboard/c4'
import C5 from '@/components/Dashboard/c5'
import C6 from '@/components/Dashboard/c6'
import C7 from '@/components/Dashboard/c7'
import C8 from '@/components/Dashboard/c8'
import C9 from '@/components/Dashboard/c9'
import C10 from '@/components/Dashboard/c10'

const gridTemplateBigScreens=`
      "a b c"
      "a b c"
      "a b c"
      "a b f"
      "d e f"
      "d e f"
      "d h i"
      "g h i"
      "g h j"
      "g h j"
    `
    const gridTemplateSmallScreens=`
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
    
    
  `
const Dashboard  = () => {
    const {palette}=useTheme();
    const isAboveMediumScreens=useMediaQuery("(min-width:1200px")
  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={
      isAboveMediumScreens?{
      gridTemplateColumns:"repeat(3,minmax(370px,1fr))",
      gridTemplateAreas:gridTemplateBigScreens,
      gridTemplateRows:"repeat(10,minmax(60px,1fr))",

    }:{
      gridAutoColumns:"1fr",
      gridTemplateAreas:gridTemplateSmallScreens,
      gridAutoRows:"80px",

    }
  }>
      <C1 />
      <C2 />
      <C3 />
      <C4 />
      <C5 />
      <C6 />
      <C7 />
      <C8 />
      <C9 />
      <C10 />
    </Box>
    
  )
}

export default Dashboard 