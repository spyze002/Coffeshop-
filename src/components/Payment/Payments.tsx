import { Box, Button, TextField, Typography  } from '@mui/material'
import React from 'react'

const Payments = () => {
    // next work to be done...
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '65px',
      backgroundColor: '#e5d3b3',
      width: '60%',
      margin: 'auto',
      borderRadius: '10px',
      mt: 10
    }}>{/**this is the whole container of the payment page */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <Typography variant='h5'>Card Number</Typography>
            <Typography>Enter the 16-degit card number on the card</Typography>
            <TextField variant='outlined' />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Box>
               <Typography>CVV Number</Typography>
               <Typography>Enter the 3 or 4 digit nuumber on the card</Typography>
          </Box>
        
              <TextField variant='outlined' />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Box>
          <Typography>Expiry Date</Typography>
              <Typography>Enter the expiration date of the card</Typography>
          </Box>
     
              <TextField variant='outlined' />
              <TextField variant='outlined' />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }} >
          <Box>
          <Typography>Password</Typography>
              <Typography>Enter your dynamic password</Typography>
          </Box>
              <TextField variant='outlined' type='password' />
        </Box>

        <Box sx={{
          display: 'flex'
        }}>
        <Button variant='contained'> Pay Now</Button> 
        <Typography> OR </Typography>
        <Button variant='contained'> Use Mobile Money</Button>
        </Box>
       

     
    </Box>
  )
}

export default Payments;