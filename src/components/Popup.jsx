import React from 'react';
import PropTypes from 'prop-types';
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';
import style from './styles/popup.module.css';
import Carousel from './Carousel';

const Popup = ({ handleClose, project }) => (
  <motion.div
    className={style.overlay}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, scale: 0.8, transition: { type: 'tween', duration: 0.3 } }}
    variants={zoomIn(0, 0.5)}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    }}
  >
    <motion.div 
      className={style.container}
      onClick={(e) => e.stopPropagation()}
    >
      <TfiClose className={style.close_btn} onClick={handleClose} />
      <Carousel carousel={project.carousel} />
      <div className={style.content}>
        <h2 className={style.name}>{project.name}</h2>
        <p className={style.tech}>
          {project.tech.map((i) => (
            <span key={i} className={style.tech_list}>{`#${i}`}</span>
          ))}
        </p>
        <p className={style.description}>{project.desc}</p>
        <div className={style.link}>
          {project.live_link && project.live_link !== '#' ? (
            <a href={project.live_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
              <span className={style.btn_hover}>
                {project.live_link.includes('apple.com') ? 'iOS App' : 'View Live'}
              </span>
              <span className={style.btn}>
                {project.live_link.includes('apple.com') ? 'iOS App' : 'View Live'}
              </span>
            </a>
          ) : null}
          {project.source_link && project.source_link !== project.live_link && project.source_link !== '#' ? (
            <a href={project.source_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
              <span className={style.btn_hover}>
                {project.source_link.includes('apple.com') ? 'iOS App' : project.source_link.includes('play.google.com') ? 'Android App' : 'Website'}
              </span>
              <span className={style.btn}>
                {project.source_link.includes('apple.com') ? 'iOS App' : project.source_link.includes('play.google.com') ? 'Android App' : 'Website'}
              </span>
            </a>
          ) : null}
          {project.android_link && project.android_link !== '#' ? (
            <a href={project.android_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
              <span className={style.btn_hover}>Android App</span>
              <span className={style.btn}>Android App</span>
            </a>
          ) : null}
          {project.command_link && project.command_link !== '#' ? (
            <a href={project.command_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
              <span className={style.btn_hover}>Command</span>
              <span className={style.btn}>Command</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

Popup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Popup;
