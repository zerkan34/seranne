import { motion } from 'motion/react';
import { ease } from '../motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <motion.footer
      className={styles.foot}
      id="contact"
      data-piece-id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      }}
    >
      <div className={styles.wrap}>
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: ease.out } },
          }}
        >
          <div className={styles.row}>
            <div>
              <h5>Sur-mesure</h5>
              <p className={styles.big}>Chaque commande commence par un rendez-vous à l'atelier.</p>
            </div>
            <div>
              <h5>Atelier</h5>
              <p>18 rue des Tailleurs<br />75003 Paris<br />Sur rendez-vous</p>
            </div>
            <div>
              <h5>Contact</h5>
              <a href="mailto:atelier@seranne.paris">atelier@seranne.paris</a>
              <a href="tel:+33100000000">+33 1 00 00 00 00</a>
              <a href="#">Instagram</a>
            </div>
            <div className={styles.bar}>
              <span>© 2026 Séranne · Paris</span>
              <span>L'élégance n'est pas un luxe, c'est un langage.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
