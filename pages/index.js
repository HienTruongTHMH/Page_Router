import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyle from '../styles/utils.module.css';

export default function Home(){
  return (
    // Layout home tức là đang cho giá trị true - đối chiếu với bên layout
    <Layout home> 
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>
        Hello, My name is Trương Hoàng Minh Hiển. 
        I want to become A fullstack Dev
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '} {/* {' '} dùng để đảm bảo có khoảng trắng trong ReactJSX */}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
  </Layout>
  );
}