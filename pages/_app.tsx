import {useDrawer} from "../utils/drawer";
import type {AppProps} from "next/app";

// Components
import {Layout} from "../components/atom";

// Styles
import {AnimatePresence} from "framer-motion";
import "../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
  const {drawer} = useDrawer();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <div
          className={`${
            drawer ? "blur-xs" : "blur-none"
          } duration-200 bg-gray-70 min-h-[calc(100vh_-_6rem)]`}
        >
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

{
  /* 
  <div className='flex ml-8 row items-center justify-end relative flex-1 h-10 '>
    <div className={`border-b-4 border-black h-1 duration-500 flex-1`}/>
                    <div className='absolute right-[-2px] top-[10px]'>
                      <Image
                        src={ArrowHead}
                        alt='ArrowHead'
                        width={13}
                        height={20}
                        quality={100}
                      />
                    </div>
                  </div> */
}
export default MyApp;
