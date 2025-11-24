import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/oleksandr-chernyakhov/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Oleksandr Chernyakhov
        </a>
        {' '}
        — a Senior Mobile and Fintech Engineer with a proven track record of architecting enterprise-grade mobile applications and financial technology platforms that process billions in transactions. I specialize in transforming complex financial systems into intuitive, secure, and high-performance mobile experiences that millions of users trust daily.
      </motion.p>
      
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
      With over a decade of experience in mobile and fintech engineering, I lead the development of mission-critical applications that power digital banking, payment processing, and financial services. My expertise spans the entire mobile development lifecycle—from architecting scalable cross-platform solutions using React Native and Flutter, to building native iOS and Android applications with Swift and Kotlin that deliver exceptional performance and user experiences.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
      In the fintech realm, I design and implement secure payment infrastructures, real-time transaction processing systems, and compliant financial APIs that meet the highest industry standards. I&apos;ve architected PCI-DSS Level 1 compliant payment gateways, integrated with major financial institutions and payment providers (Stripe, PayPal, Adyen, banking APIs), and built sophisticated fraud detection and risk management systems that protect millions of transactions. My solutions leverage advanced encryption, biometric authentication, and zero-trust security architectures.
      </motion.p>
      
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
      I excel at optimizing mobile applications for performance at scale—implementing efficient state management, offline-first architectures, real-time synchronization, and advanced caching strategies. My backend expertise includes designing distributed systems for payment processing, building high-throughput APIs that handle millions of requests per second, and implementing comprehensive financial data analytics platforms. I&apos;m well-versed in blockchain technology, cryptocurrency integrations, and regulatory compliance frameworks (PCI-DSS, GDPR, PSD2, Open Banking).
      </motion.p>

      
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
      Beyond technical execution, I lead engineering teams, establish best practices, and mentor developers in mobile development and fintech security standards. I&apos;m passionate about building maintainable, scalable codebases that evolve with business needs while maintaining the highest standards of security, performance, and user experience. My work has directly contributed to the success of multiple fintech startups and enterprise financial platforms, processing billions in transaction volume.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
