import { useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Data
import Data from '../../dummy/project-list.json';

// Images
// import ArrowHead from '../../assets/ArrowHead.png';

const HomePage: NextPage = () => {
  const [data] = useState<{ id: number; name: string }[]>(Data);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className='pl-12 overflow-hidden pb-10'>
        {data.map((item) => {
          return (
            <Link
              href={{ pathname: '/project', query: { id: item.id } }}
              key={item.id}
              passHref
            >
              <a>
                <div className=' flex-nowrap items-center flex w-[60vw] cursor-pointer '>
                  <p className='text-base font-bold leading-loose'>
                    {item.name}
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HomePage;
