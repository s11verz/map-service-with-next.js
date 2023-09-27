import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';

interface Props {
  onClickLogo?: () => void;
  rightElement?: React.ReactElement[];
}

const HeaderComponent = ({ onClickLogo, rightElement }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box} onClick={onClickLogo}>
          <Image
            src="https://lecture-1.vercel.app/inflearn.png"
            width={110}
            height={20}
            alt="인프런 로고"
          />
        </Link>
      </div>
      {rightElement && <div className={styles.flexItem}>{rightElement}</div>}
    </header>
  );
};

export default HeaderComponent;
