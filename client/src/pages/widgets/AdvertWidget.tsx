import { Typography, useTheme } from '@mui/material'
import FlexBetween from '../../components/Layout'
import WidgetWrapper from '../../components/WidgetWrapper'

const categories: Array<string> = [
  'CCSEA-1 - College of Computer Studies and Engineering Architecture',
  'CCSEA-2 - College of Computer Studies and Engineering Architecture',
  'CCSEA-3 - College of Computer Studies and Engineering Architecture',
  'CCSEA-4 - College of Computer Studies and Engineering Architecture',
  'CCSEA-5 - College of Computer Studies and Engineering Architecture',
  'CCSEA-6 - College of Computer Studies and Engineering Architecture',
  'CCSEA-7 - College of Computer Studies and Engineering Architecture',
  'CCSEA-8 - College of Computer Studies and Engineering Architecture',
  'CCSEA-9 - College of Computer Studies and Engineering Architecture',
  'CCSEA-10 - College of Computer Studies and Engineering Architecture',
]

const AdvertWidget = () => {
  const { palette } = useTheme()
  const dark = palette.neutral.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Category
        </Typography>
        {/* <Typography color={medium}></Typography> */}
      </FlexBetween>
      {/* <img
        width='100%'
        height='auto'
        alt='advert'
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FVerto-Lab-Categories-Game%2Fdp%2FB06XPFGBMW&psig=AOvVaw3t9-Ct5utHlqcULwaKJytk&ust=1671619701344000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi6gOqCiPwCFQAAAAAdAAAAABAD'
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      /> */}
      <FlexBetween>
        {/* <Typography color={main}>This is a categories</Typography> */}
        {/* <Typography color={medium}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsa.
        </Typography> */}
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        {categories.map(category => {
          return (
            <Typography color={medium} m='0.5rem 0'>
              {category}
            </Typography>
          )
        })}
      </Typography>
    </WidgetWrapper>
  )
}

export default AdvertWidget
