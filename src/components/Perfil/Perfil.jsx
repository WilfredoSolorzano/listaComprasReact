import React from 'react';
import styles from './Perfil.module.css';

function Perfil() {
  return (
    <div className={styles.container} style={{ marginBottom: '44px' }}>
      <div className={styles.avatar}>
        <img src="/perfil.png" alt="wilfredo" />
      </div>
      <div className={styles.bio}>
        <span className={styles.name}>Wilfredo Solórzano</span>
        <span className={styles.socialHandler}>@wsolorzano00</span>
        <span className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          fugit!
        </span>
      </div>
    </div>
  );
}

export default Perfil;
