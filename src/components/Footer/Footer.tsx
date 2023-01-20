import { Typography, Box } from '@mui/material';

const Footer = () => {

  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6f4e37',
        mt: 20,
        gap: 3
    }}>
           <Typography variant='h6'>
            &copy;2023 Coffee shop, lnc.
          </Typography>
        <Box sx={{
          display: 'flex',
          gap: 3
        }}>
          <Typography variant='h6' >Archive</Typography>
          <Typography variant='h6' >Privacy policy</Typography>
          <Typography variant='h6'>Terms</Typography>
        </Box>
        <Typography variant='h6'> Publish with github online</Typography>

    </Box>
  )
}

export default Footer