import { motion, AnimatePresence } from 'framer-motion'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import imageOne from '../../../../public/static/home/service_one.jpg'
import imageTwo from '../../../../public/static/home/service_two.jpg'
import imageThree from '../../../../public/static/home/service_three.jpg'
import imageFour from '../../../../public/static/home/service_four.jpg'
import imageFive from '../../../../public/static/home/service_five.jpg'
import imageSix from '../../../../public/static/home/service_six.jpg'
import imageSeven from '../../../../public/static/home/service_seven.jpg'
import imageEight from '../../../../public/static/home/service_eight.jpg'
import imageNine from '../../../../public/static/home/service_nine.jpg'
import imageTen from '../../../../public/static/home/service_ten.jpg'
import imageEleven from '../../../../public/static/home/service_eleven.jpg'
import imageTwelve from '../../../../public/static/home/service_twelve.jpg'
import imageThirteen from '../../../../public/static/home/service_thirteen.jpg'
import imageFourteen from '../../../../public/static/home/service_fortin.jpg'
import imageFifteen from '../../../../public/static/home/service_fitfeen.jpg'
import imageSixteen from '../../../../public/static/home/service_sixteen.jpg'

const Gallery = () => {
  const images = [
    imageSixteen.src,
    imageOne.src,
    imageTwo.src,
    imageThree.src,
    imageFour.src,
    imageFive.src,
    imageSix.src,
    imageSeven.src,
    imageEight.src,
    imageNine.src,
    imageTen.src,
    imageEleven.src,
    imageTwelve.src,
    imageThirteen.src,
    imageFourteen.src,
    imageFifteen.src,
  ]
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = index => {
    setSelectedImage(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" sx={{ py: 5, textAlign: 'center' }}>
        Our Work Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.map((imageUrl, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div>
              <Paper
                sx={{ overflow: 'hidden', width: '100%', height: '100%' }}
                elevation={3}
                onClick={() => handleImageClick(index)}
              >
                <motion.img
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                  }}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000,
            }}
            onClick={handleClose}
          >
            <motion.img
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
              }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Gallery
