// Thì đối với Server-Side Rendering.
// Chuyển vè HTML 'động'
// Nếu bạn có nhiều posts như: chẳng hạn bạn có trang profile chứa: my blog, my project, và my cv.
// Thì việc chuyển dữ liệu giữa các trang cần ID của từng trang. Nhưng việc này sẽ bị không tối ưu lắm.
// Vì thế cần có Dynamic Route: [-đặt tên-].js dùng để route tới các trang. 
// Nhưng nó cần có các Giá trị (id) == (params) của từng trang sẵn. Vì thế ta phải nạp Paths sẵn để có thể lấy được ID Của từng thằng.
import utilStyles from '../../styles/utils.module.css';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
 
export async function getStaticProps({ params }) {
    
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
}

