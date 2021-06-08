import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  const router = useRouter();

  function handleClick(): void {
    router.push('/');
  }

  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="logo"
        width="240"
        height="25"
        onClick={handleClick}
      />
    </header>
  );
}
