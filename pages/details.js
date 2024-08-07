import MainLayout from '@/layouts/main'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import Page from '@/components/Page'
import { Box, Container, Grid, Typography } from '@mui/material'

const RootStyle = styled(Page)({
  height: '100%',
})

const ProductsPage = () => {
  return (
    <MainLayout>
      <RootStyle title="E-Madrasa | Products" id="move_top">
        <Container sx={{ paddingTop: '5rem' }} maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            Our Details
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            ভর্তি হতে যা প্রয়োযোন ভোটার আই ডি কার্ড বা জন্ম নিবন্ধান অথবা আপনার
            নাম, ফোন নাম্বার, আব্বু আম্মুর নাম ইত্যাদি দিয়ে একটি সহজ ফরম পুরন
            কালে ভার্তী হতে পারবেন। ভোর্তি ফি: মাত্র ১০০/- ৩৫০/- টাকা।। মাসিক ফি
            আপনার ইচ্ছা মত যে কোনো অংকের টাকা বিকাশ নগদ এর মাধ্যমে প্রদান করতে
            পারবেন। আমাদের প্রতিষ্ঠানকে সাহায্য করেতে চাইলে আমাদের সাইটের
            www.earthcobd.com থেকে নিত্য প্রয়োজনিয় যে কোনো পণ্য কিনলেই এর লাভের
            টাকা থেকে আমাদের প্রতিসষ্ঠান ভালোভাবেই চলতে পারবে ইনসাআল্লাহ।। যদি
            কেউ দান করেত চান তবে আমাদের প্রতিষ্ঠানের যে কোন বাচ্চার খাওয়া বা
            পড়ার খারচ নিতে আমাদের সাথে সরাসারী বা ফোন নাম্বারে যোগাযোগ করুন
            ০১৯১৫-৩৬৩৭০৮ নগদ অথাবা ০১৯০৮-৯৬২৪০৬ বিকাশ পার্সোনাল নাম্বার।
            <span
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                display: 'block',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              SC পদে পার্টাইম কমিশোন বেজে কাজের সুযোগ।।
            </span>
            ৩৫০/- টাকা ভোর্তি ফি দিলে পাবানে পড়াসোনার পাসাপাসি SC পদে পার্টাইম
            কমিশোন বেজে কাজের সুযোগ।। যে ভাবে কমিশোন পাবেন প্রতি ১ জন শিক্ষার্থী
            দিলে নগদ কমিসন পাবেন অনলাইন ভোর্তী ফি ৩৫০/- টাকার থেকে পাবেন ৭৫ টাকা
            প্রাতিদন যতো খুসি তত ছাত্র ছাত্রী ভোর্তী করতে পারবেন ২০×৩=৬০ জন
            প্রতি দিন মাত্র ২ জন কোরে দিলেই পাবেন মাসে ৮০০০ টাকা বেতন কমিশোনের
            ৪৫০০/- টাকা তো থাকছেই সর্বমোট আপনার এক মাসে ইনকাম থাকছে ১২৫০০/-
            টাকা। SC পদে পার্টাইম কাজ করতে আপনার প্রাযোজন হবে আপনার ভোটার আই.ডি
            কার্ড অথাবা জন্ম সনদ একং ১২৫০ আর-সি সমপরিমান পন্য ক্রয় বা ১২৫০ টাকা
            নগদ প্রদান করতে হবে। কাজ করেও এই টাকা প্রদান করা জাবে। সে ক্ষেত্রে
            আগে উক্ত টাকা কাটা হবে তার পর আপনি আপনার কমিশোন পাবেন। অফলাইন আবাসিক
            অনাবাসি ভির্তীর হতে সরাসরী অথবা কল করুন ফোন নাম্বারে যোগাযোগ করুন
            ০১৯১৫-৩৬৩৭০৮ নগদ অথাবা ০১৯০৮-৯৬২৪০৬ বিকাশ পার্সোনাল নাম্বার।
          </Typography>
        </Container>
      </RootStyle>
    </MainLayout>
  )
}

export default ProductsPage
