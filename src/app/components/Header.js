import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const Header = () => {
  // Your server-side logic here
  return (
    <header className={styles.main_header} >
        <div className= {styles.navbar_brand}>
            <Link href= "/">
            <Image src="/logo.png" alt="logo" width={150} height={50}/>
            </Link>
        </div>
        <Nav/>
        
    </header>

  );
}
export default Header;