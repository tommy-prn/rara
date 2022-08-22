import {useState} from "react";
import {NextPage} from "next";
import Head from "next/head";

// Component
import {TextGroup} from "../../components/atom/TextGroup";
import {Header} from "../../components/atom";

// Style
import {motion} from "framer-motion";

const About: NextPage = () => {
  const [team] = useState<string[]>([
    "Dhaneswara Dewata",
    "Eistein Benedito",
    "Hagai Gitri Batara",
    "Vernando Antoni",
  ]);

  const [pastTeam] = useState<string[]>([
    "Rizqy Prathama",
    "Sarah Adeline",
    "Venessa Kyanada",
    "David Mulyawan Troy",
  ]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <div className="flex justify-center items-center">
        <Head>
          <title>About</title>
          <meta name="description" content="About studio rara+" />
        </Head>

        <div className="w-full px-12 flex flex-col justify-between">
          <Header />
          <div className="flex">
            <TextGroup title="Team Member" data={team} containerStyle="mr-48" />
            <TextGroup title="Team Member" data={team} />
          </div>
          <p className="text-2xl font-semibold absolute top-[50%]">
            Studio Rara+ is an{" "}
            <span className="underline decoration-2">
              architecture practice{" "}
            </span>{" "}
            based in Bekasi/Jakarta, Indonesia
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
