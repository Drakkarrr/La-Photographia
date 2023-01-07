import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form'
import styled from 'styled-components'

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  return (
    <>
      <StyledBox>
        <Box>
          <Box
            width='100%'
            backgroundColor={theme.palette.background.alt}
            p='1rem 6%'
            textAlign='center'
          >
            <Typography
              className='heading'
              fontWeight='bold'
              fontSize='3.5rem'
              color='primary'
            >
              La Photograpia
            </Typography>
          </Box>

          <Box
            width={isNonMobileScreens ? '50%' : '93%'}
            p='2rem'
            m='2rem auto'
            borderRadius='1.5rem'
            backgroundColor={theme.palette.background.alt}
          >
            <Typography
              className='text'
              fontWeight='500'
              variant='h5'
              sx={{ mb: '1.5rem' }}
            >
              Express the <span>Tressured</span> moments that matters with{' '}
              <span> La Photograpia</span>
            </Typography>

            <Form />
          </Box>
        </Box>
      </StyledBox>
    </>
  )
}

export default LoginPage

const StyledBox = styled.div`
  span {
    color: #087830;
    font-weight: bold;
  }
  .heading {
    font-weight: bold;
    text-transform: uppercase;
    color: #087830;
  }
  h2 {
    font-size: 1.1rem;
    letter-spacing: 0.8px;
    span {
      color: #087830;
    }
  }
  .text {
    font-size: 1.2rem;
    text-align: center;
    font-family: 'Cardo', serif;
  }
`
