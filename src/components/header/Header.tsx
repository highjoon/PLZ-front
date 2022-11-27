import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import styles from './header.module.css';

interface IHeader {
  page: 'home' | 'detail' | 'write';
  href?: string;
}

const Header = ({ page = 'home', href }: IHeader) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
  };

  return (
    <div className={styles.container}>
      {page === 'home' && (
        <div className={styles.logos}>
          <span className={`heading1 ${styles.logo}`}>내 플리를 부탁해,</span>
          <Image src="/icons/logo.svg" width="50" height="45" alt="logo" />
        </div>
      )}
      {page === 'detail' && (
        <div>
          <Image
            src="/icons/back.svg"
            width="28"
            height="28"
            alt="back_icon"
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      )}
      {page === 'write' && <div></div>}
      <div className={styles.icons}>
        {page !== 'write' && (
          <Image
            src={page === 'home' ? '/icons/alarm.svg' : '/icons/white_alarm.svg'}
            width="24"
            height="24"
            alt="alarm_icon"
            className="mr-[18px]"
          />
        )}
        <Image
          src={page === 'home' ? '/icons/hamburger.svg' : '/icons/white_hamburger.svg'}
          width="24"
          height="24"
          alt="menu_icon"
        />
      </div>
    </div>
  );
};

export default Header;
