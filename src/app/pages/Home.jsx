"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import { 
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation,
ButtonAnimation
} 
from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Rounda <br className="xl:block hidden"/> Store!
              </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Créez votre chemise unique et exclusive avec notre tout nouveau outil de personnalisation 3D. 
                <strong> Laissez libre cours à votre imagination</strong>{" "} et définissez votre propre style.
              </p>
                <motion.div
                 {...ButtonAnimation}
                 className="flex flex-row gap-5"
                >
                  <CustomButton
                    type="filled"
                    title="Personnalisez-le et enregistrez-le"
                    handleClick={() => state.intro = false}
                    customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                  />
                     <CustomButton
                    type="filled"
                    title="Notre Boutique"
                    handleClick={() => (window.location.href = 'http://rounda.duckdns.org/')}
                    customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                  />
                  
                  </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home