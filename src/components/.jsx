import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { PiArrowFatLinesLeftBold, PiArrowFatLinesRightBold } from 'react-icons/pi';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import SectionWrapper from '../hoc';
import { Experiences } from '../constants';
import style from './styles/experience.module.css';

const Experience = () => {
  const [number, setNumber] = useState(1);
  const [showPerPage, setShowPerPage] = useState(1);
  const [desktop, setDesktop] = useState(false);
  const lastNumber = number * showPerPage;
  const firstNumber = lastNumber - showPerPage;
  const filterExperience = Experiences.slice(firstNumber, lastNumber);

  const prev = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 2 ? prevNumber - 1 : 1));
    } else {
      setNumber((prevNumber) => (prevNumber === 1 ? Experiences.length : prevNumber - 1));
    }
  };

  const next = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 1 ? prevNumber + 1 : 2));
    } else {
      setNumber((prevNumber) => (prevNumber === Experiences.length ? 1 : prevNumber + 1));
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setShowPerPage(3);
        setDesktop(true);
      } else {
        setShowPerPage(1);
        setDesktop(false);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Experiences
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <div className={style.carousel_container}>
        {/* Experiences card */}
        <motion.div variants={fadeIn('', '', 0.5, 1)} className={style.card_container}>
          {filterExperience.map((Experience) => (
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn('', '', 0.15, 1)}
              key={Experience.id}
              className={style.card}
            >
              <div className={style.header}>
                <motion.div variants={textVariant()}><FaQuoteLeft className={style.openquote} /></motion.div>
                <img className={style.img} src={Experience.image} alt="profile" />
              </div>
              <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.para}>{Experience.text}</motion.p>
              <div className={`${style.label} ${style.firstlabel}`}>
                <motion.p variants={slideIn('left', '', 0.3, 0.75)} className={style.name}>
                  {Experience.name}
                  {' '}
                  <span className={style.country}>
                    (
                    {Experience.country}
                    )
                  </span>
                </motion.p>
                <motion.abbr variants={slideIn('right', '', 0.3, 0.75)} title="LinkedIn Profile">
                  <a
                    href={Experience.linkedIn}
                    target="_blank"
                    className={style.icon}
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.abbr>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className={style.btn_container}>
          <button
            className={desktop && number === 1 ? 'hidden' : `${style.button} ${style.prev}`}
            type="button"
            onClick={prev}
          >
            <PiArrowFatLinesLeftBold />
          </button>
          <button
            className={desktop && number === 2 ? 'hidden' : `${style.button} ${style.next}`}
            type="button"
            onClick={next}
          >
            <PiArrowFatLinesRightBold />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'Experience', 'my-0');
