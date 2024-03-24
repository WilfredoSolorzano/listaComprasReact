import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>MinhaListaDeCompras.com.br</div>
      <ul className={styles.right}>
        <li><button>Home</button></li>
        <li><button>Quem Somos</button></li>
        <li><button>Contato</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;