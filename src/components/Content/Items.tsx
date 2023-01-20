import { Box, Button, Typography } from '@mui/material'
import item_data from './ItemData';
import './items.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Items = () => {
  const DisplayItems = item_data.map ((coffee)=>
  <Box
  key={coffee.id}
  sx = {{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 1,
    alignItems: 'center',
    mt:13,
    // border: '1px solid grey',
    borderRadius: '10px',
    boxShadow: '1px 2px 9px #C4A484',
    

  }}
  
  >
<Typography variant='h6' sx={{display: 'flex', opacity: '0.7', width: 300, justifyContent:'center', alignItems: 'center'}}>
  {coffee.itemName}
</Typography>
<Box
component='img'
src={coffee.pic}
sx={{
  width: 300,
  borderRadius: '10px'
}}
/>

<Typography sx={{display: 'flex', width: 200, opacity: 0.5, justifyContent: 'center'}}>
  {coffee.itemDescription}
</Typography>
    

    <Button
    variant='contained'
    sx={{
      display: 'flex',
      width: '200'
    }}>
      {coffee.price} {coffee.currency}
    </Button>



  </Box>
  )
  return (
   <>
   <Box
   sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: 1,
    flexWrap: 'wrap',
    
  
   
   }}>
    {DisplayItems}
    
   </Box>
   <Box
   sx={{
    display: 'flex',
    width: '100%',
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#C4A484',

    mt: 10
   }}> {/** this are going to be links to some social media sites */}
    <a href='https://www.linkedin.com/in/esum-brandon-1ba3401b1/' className='Social' target='_blank' color='#fff'> <LinkedInIcon /> LinkedIn</a>
    <a href='https://github.com/spyze002' className='Social' target='_blank'> <GitHubIcon /> GitHub </a>
    <a href='https://www.instagram.com/kikz__0/' className='Social' target='_blank'> <InstagramIcon /> Instagram </a>
    <a href='https://github.com/spyze002' className='Social' target='_blank'> <FacebookIcon /> FaceBook </a>
   </Box>
   </>
  )
}

export default Items;