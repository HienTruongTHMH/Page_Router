import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "Trương Hoàng Minh Hiển";
// Những gì export ở các file có thể được sử dụng trong trang khác thông qua Import
export const siteTitle = 'Next.js title website';
export default function Layout({ children, home }){ // { children } là tham số cho các components thuộc lớp con.
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/images/favicon.ico'/>
                <meta
                    name="description"
                    content='This is demo for next.js framewwork'
                />
                <meta
                    property='og:image'
                    content={ `https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle}/> {/* og:image giống như thuộc tính style, chọn style cho thẻ meta.*/}
                <meta name="twitter:card" content='summary_large_image'/>
            </Head>
            <header className={styles.header}>
                        {/* nếu không home thì sẽ cho ra kết quả sau : . */}
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt='This is my avatar'
                        />
                        {/* giống css thuần. */}
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image 
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt='Link for avatar'
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/' className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                ) }
            </header>
            <main>{children}</main>
            {/* <div className={styles.backToHome}>
                <Link href='/'>Back to home</Link>
            </div> */}
        </div>
    );
}