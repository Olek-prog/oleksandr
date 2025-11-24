import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import SectionWrapper from '../hoc';
import { experiences } from '../constants';
import { social } from '../constants';
import style from './styles/experience.module.css';

const Experience = () => {
  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Experiences
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <div className={style.carousel_container}>
        {/* Experiences card */}
        <motion.div variants={fadeIn('', '', 0.5, 1)} className={style.card_container}>
          {experiences.map((experience) => (
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn('', '', 0.15, 1)}
              key={experience.id}
              className={style.card}
            >
              <div className={style.comlogo}>
                <div className={style.header}>
                  <img className={style.img} src={experience.image} alt="profile" />
                </div>  
              </div>
              <div className={style.content}>             
                <div className={`${style.label} ${style.firstlabel}`}>
                  <motion.p variants={slideIn('left', '', 0.3, 0.75)} className={style.name}>
                    {experience.name}
                    {' '}
                    <span className={style.jobtitle}>
                      (
                      {experience.jobtitle}
                      )
                    </span>
                  </motion.p>
                  <motion.abbr variants={slideIn('right', '', 0.3, 0.75)} title="Company location">
                    <p
                      target="_blank"
                      className={style.icon}
                      rel="noreferrer"
                      aria-label="Company location"
                    >
                      {experience.location}
                    </p>
                  </motion.abbr>
                </div>
                <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.para}>{experience.text}</motion.p>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience', 'my-0');
