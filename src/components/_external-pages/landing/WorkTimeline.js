import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
// material
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
} from '@mui/lab'
import { Block } from './Block'

const WorkTimeline = () => {
  const TIMELINES = [
    {
      key: 2,
      title: 'নুরানী মক্তব',
      des: 'We provide treatment and medication for all types of diseases',
      time: 'শিক্ষা ',
      color: 'primary',
      icon: <LocalLibraryIcon />,
    },
    {
      key: 3,
      title: 'আদর্শ নাজেরা',
      des: 'We provide products in low price than market',
      time: 'শিক্ষা',
      color: 'secondary',
      icon: <LocalLibraryIcon />,
    },
    {
      key: 4,
      title: 'হিফজুল কুরআন',
      des: 'We provide jobs to unemployed people',
      time: 'শিক্ষা',
      color: 'info',
      icon: <LocalLibraryIcon />,
    },
    {
      key: 5,
      title: 'হিফজ বিভিশন',
      des: 'We provide medical support to poor people',
      time: 'শিক্ষা',
      color: 'success',
      icon: <LocalLibraryIcon />,
    },
    {
      key: 6,
      title: 'ইসলামী সংঙ্গীত শিক্ষা ও আররী ও ইংরেজী শিক্ষা ',
      des: 'We provide the best courses for learning to solve unemployment',
      time: 'শিক্ষা',
      color: 'warning',
      icon: <LocalLibraryIcon />,
    },
    {
      key: 7,
      title: 'অনলাইন ই-মাদ্রাসা',
      des: 'বিসমিল্লাহির রাহমানির রাহীম ফাহমিদা হক জিম অনলাইন মাদ্রাসা এটি আর্থ ফাউনেডেসনের একটি শিক্ষা মুলক প্রতিষ্ঠান আমাদের এই অনলাইন মাদ্রাসা টি থেকে আপনি যে কোন সময় কলসেন্টার এর মত করে ২৪/৭ নামাজের সময় বাদে Whtsapp বা imo এর মাধ্যমে ভিডিও কল করে পড়া নিতে এবং দিতে পারবেন। সারাদিনে একবার দুইবার তিন বার যতো খুসি। ২৪ ঘন্টায় অনতত একবার পড়া না দিলে আমাদের একজন শিক্ষক আপনাকে কল করবে পড়া নেওয়া এবং দেওয়ার জন্য। সে ক্ষেত্রে আপনি আপনার জিবন দসায় কুরআনের হাফেজ বা হাফেজা হয়ে, আপনি নাজাতের পথ নিয় পৃথিবীর থেকে বিদায় নিতে পারবেন ইনসাআল্লাহ।',
      time: 'শিক্ষা',
      color: 'error',
      icon: <LocalLibraryIcon />,
    },
  ]
  return (
    <>
      <Typography variant="h3" sx={{ py: 5, textAlign: 'center' }}>
        We are working on
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Block>
            <Timeline position="alternate">
              {TIMELINES.map(item => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      sx={{
                        p: {
                          xs: 1,
                          md: 2,
                          lg: 3,
                        },
                        bgcolor: 'grey.50012',
                      }}
                    >
                      <Typography variant="subtitle2">{item.title}</Typography>
                      {item.key === 7 && (
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {item.des}
                        </Typography>
                      )}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Block>
        </Grid>
      </Grid>
    </>
  )
}

export default WorkTimeline
