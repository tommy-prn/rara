import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Jobs: NextPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className='flex justify-center items-center'>
        <Head>
          <title>Career</title>
          <meta name='description' content='About studio rara+' />
        </Head>

        <div className='w-full px-12 absolute top-[calc(50%_-_6rem)]'>
          <p className=' w-1/2 '>
            currently, we have no open position but we are happy to receive a
            spontaneous application you can send your portfolio to
            <span className='font-semibold'> jobs@studiorara.id</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Jobs;
