import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';
import { photo } from '../assets';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        <img src={photo} alt="My photo" className={style.photo} loading="lazy" />
      </p>
      <p className={style.intro}>
        Hi, I&apos;m
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
          Oleksandr Chernyakhov
        </motion.span>
      </p>
      <p className={style.intro}>
        I am a 
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
          Senior Mobile and Fintech Engineer
        </motion.span>
      </p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
          Check out my work
        </span>
        <span className={style.btn}>
          Check out my work
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
