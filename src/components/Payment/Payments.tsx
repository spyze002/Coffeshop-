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
    <form action='POST' method=''>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',

        }}>
            <Typography variant='h6'>Card Number</Typography>
            <Typography>Enter the 16-degit card number on the card</Typography>
            <TextField variant='outlined' required type='number' />
        </Box>
        <Box sx={{
          display: 'flex',
          // width: '100%',
          justifyContent: 'space-evenly',
          mt: 2
        }}>
          <Box>
               <Typography>CVV Number</Typography>
               <Typography>Enter the 3 or 4 digit nuumber on the card</Typography>
          </Box>
        
              <TextField variant='outlined' fullWidth type='number' required  />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2
        }}>
          <Box>
          <Typography>Expiry Date</Typography>
              <Typography>Enter the expiration date of the card</Typography>
          </Box>
     
              <TextField variant='outlined' fullWidth type='date' required />
              {/* <TextField variant='outlined' /> */}
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2
        }} >
          <Box>
          <Typography>Password</Typography>
              <Typography>Enter your dynamic password</Typography>
          </Box>
              <TextField variant='outlined' type='password' fullWidth />
        </Box>

        <Box sx={{
          display: 'flex',
          mt: 2,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: 'auto',
          width: '50%'
        }}>
        <Button variant='contained' type='submit'> Pay Now</Button> 
        <Typography> OR </Typography>
        <Button variant='contained' type='button'> Use Mobile Money</Button>
        </Box>
       
              
    </form>
     
    </Box>
  )
}

export default Payments;