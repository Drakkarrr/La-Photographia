import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import styled from 'styled-components'
import Form from './Form'

const LoginPage: React.FC = () => {
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
            <Typography fontWeight='bold' fontSize='32px' className='logo'>
              LA PHOTOGRAPHIA
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
              Express the moment you treasure with <span>La Photographia</span>
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
  height: 90vh;
  margin: auto;
  text-align: center;
  .logo {
    font-size: 3rem;
    font-weight: 700;
    color: green;
    letter-spacing: 1.5px;
  }

  .text {
    font-size: 23px;
    color: green;
    font-size: bold;
    span {
      font-weight: bolder;
      font-size: 2rem;
      letter-spacing: 1px;
    }
  }
`
