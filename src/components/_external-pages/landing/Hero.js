import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import flashFill from '@iconify/icons-eva/flash-fill'
// next
import NextLink from 'next/link'
// material
import { styled } from '@mui/material/styles'
import { Box, Stack, Button, Container, Typography } from '@mui/material'
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from '../../animate'
import mosque from '../../../../public/static/mosque.png'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}))

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
)

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}))

const MarqueeText = styled('div')(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'scroll 25s linear infinite',
  fontSize: '16px',
  color: 'white',
}))

const MarqueeContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
  borderRadius: '10px',
  zIndex: 10000,
}))

const GlobalStyles = styled('style')`
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

// ----------------------------------------------------------------------

export default function Hero() {
  return (
    <>
      <GlobalStyles />
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/overlay.svg"
          variants={varFadeIn}
        />

        <HeroImgStyle
          alt="hero"
          src="/static/mosque.png"
          variants={varFadeInUp}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                ফাহমিদা হক জিম
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  &nbsp;ই-মাদ্রাসা
                </Typography>
              </Typography>

              <MarqueeContainer>
                <MarqueeText>
                  ভর্তী চলছে ভোর্তী চলছে ভোর্তী চলছে ফাহমিদা হক জিম অনলাই
                  ই-মাদ্রাসায় ভোর্তী চলছে অনলাইন, অফলাইন, আবাসিক অনাবাসিকে
                  ভির্তীর হতে সরাসরী অথবা কল করুন ফোন নাম্বারে যোগাযোগ করুন
                  ০১৯১৫-৩৬৩৭০৮ নগদ অথাবা ০১৯০৮-৯৬২৪০৬ বিকাশ পার্সোনাল নাম্বার।
                </MarqueeText>
              </MarqueeContainer>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  color: 'common.white',
                  backgroundColor: {
                    xs: 'rgba(108, 117, 125, 0.308)',
                    md: 'transparent',
                  },
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  padding: {
                    xs: '10px',
                    md: '0px',
                  },
                }}
              >
                বিসমিল্লাহির রাহমানির রাহীম ফাহমিদা হক জিম অনলাইন মাদ্রাসা এটি
                আর্থ ফাউনেডেসনের একটি শিক্ষা মুলক প্রতিষ্ঠান আমাদের এই অনলাইন
                মাদ্রাসা টি থেকে আপনি যে কোন সময় কলসেন্টার এর মত করে ২৪/৭
                নামাজের সময় বাদে Whtsapp বা imo এর মাধ্যমে ভিডিও কল করে পড়া নিতে
                এবং দিতে পারবেন। সারাদিনে একবার দুইবার তিন বার যতো খুসি। ২৪
                ঘন্টায় অনতত একবার পড়া না দিলে আমাদের একজন শিক্ষক আপনাকে কল করবে
                পড়া নেওয়া এবং দেওয়ার জন্য। সে ক্ষেত্রে আপনি আপনার জিবন দসায়
                কুরআনের হাফেজ বা হাফেজা হয়ে, আপনি নাজাতের পথ নিয় পৃথিবীর থেকে
                বিদায় নিতে পারবেন ইনসাআল্লাহ।
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <NextLink href={'/details'}>
                <Button
                  sx={{ marginTop: '-2rem' }}
                  size="medium"
                  variant="contained"
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  Details
                </Button>
              </NextLink>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  )
}
