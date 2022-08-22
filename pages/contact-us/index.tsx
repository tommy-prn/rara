import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Component
import { TextGroup } from '../../components/atom/TextGroup';
import { useState } from 'react';

const ContactUs: NextPage = () => {
  const [Address] = useState<string[]>([
    'Ruko Jatibening Estate Blok G1/2',
    'Jl. Elang Raya, Pondok Gede',
    ' Bekasi, 17412',
  ]);
  const [Phone] = useState<string[]>(['+62 812 9519 9517']);
  const [Social] = useState<string[]>(['@_studiorara']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className='flex justify-center items-center'>
        <Head>
          <title>Contact-Us</title>
          <meta name='description' content='About studio rara+' />
        </Head>

        <div className='w-full px-12 flex flex-col justify-between'>
          <div className='flex w-content'>
            <TextGroup
              title='Home Office'
              data={Address}
              containerStyle='mr-16'
            />
            <TextGroup title='Phone' data={Phone} containerStyle='mr-16' />
            <TextGroup title='Social Media' data={Social} />
          </div>
          <p className='text-2xl font-semibold absolute top-[50%]'>
            contact@studiorara.id
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
