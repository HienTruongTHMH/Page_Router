import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout, {siteTitle} from '../components/layout';
import Head from 'next/head';



// getSortedPostsData giống như hàm để đọc tất cả các file cua next-blog - lấy ra các giá trị và trả về { }.
// Bây giờ tạo 1 Static - Generation: 
//  Giành cho các web tĩnh, giống như việc bạn có sẵn một page đang chờ sẵn, và chỉ chờ bạn click để hiện ra.
// Không bao giờ có ở client. 
// Đây là hàm để lấy các dữ liệu và render cho web tĩnh.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { 
    props: { 
      allPostsData, },
    };
}


export default function Home({allPostsData}){
  return (
    // Layout home tức là đang cho giá trị true - đối chiếu với bên layout
    <Layout home> 
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        Hello, My name is Trương Hoàng Minh Hiển. 
        I want to become A fullstack Dev
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '} {/* {' '} dùng để đảm bảo có khoảng trắng trong ReactJSX */}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
  </Layout>
  
  );
}