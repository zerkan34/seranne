import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { spring, ease } from '../motion';
import styles from './Piece.module.css';

export default function Piece({ piece, onOpenImage }) {
  const ref = useRef(null);
  const imgRef = useRef(null);

  // Image parallax: image drifts up slightly slower than page.
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  return (
    <section
      ref={ref}
      className={styles.piece}
      id={`s-${piece.id}`}
      data-piece-id={piece.id}
    >
      <div className={styles.wrap}>
        <motion.div
          className={styles.lab}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: ease.out }}
        >
          <span>{piece.num} / 007 — {piece.label}</span>
          <b>{piece.article} {piece.name}</b>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.0, ease: ease.out }}
        >
          <motion.h3
            className={styles.h3}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.9, ease: ease.out, delay: 0.1 }}
          >
            {piece.article} <em>{piece.name}</em>
          </motion.h3>

          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.9, ease: ease.out, delay: 0.2 }}
          >
            {piece.desc}
          </motion.p>

          <motion.dl
            className={styles.specs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
            }}
          >
            {piece.specs.map(([k, v]) => (
              <motion.div
                key={k}
                className={styles.specRow}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } },
                }}
              >
                <dt>{k}</dt>
                <dd>{v}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.a
            href="#contact"
            className={styles.req}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Écrire à l'atelier
            <motion.span
              className={styles.arrow}
              initial={false}
              whileHover={{ x: 4 }}
              transition={spring.precise}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          ref={imgRef}
          className={piece.bleed ? styles.bleed : styles.imgWrap}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5% 0px' }}
          transition={{ duration: 1.1, ease: ease.out }}
        >
          <motion.div
            className={styles.img}
            onClick={() => onOpenImage(piece)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={spring.soft}
            style={{ cursor: 'zoom-in' }}
          >
            <motion.img
              src={piece.img}
              alt={`${piece.article} ${piece.name}`}
              style={{ y: imgY, scale: imgScale }}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
