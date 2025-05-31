// Thì đối với Server-Side Rendering.
// Chuyển vè HTML 'động'
// Nếu bạn có nhiều posts như: chẳng hạn bạn có trang profile chứa: my blog, my project, và my cv.
// Thì việc chuyển dữ liệu giữa các trang cần ID của từng trang. Nhưng việc này sẽ bị không tối ưu lắm.
// Vì thế cần có Dynamic Route: [-đặt tên-].js dùng để route tới các trang. 
// Nhưng nó cần có các Giá trị (id) == (params) của từng trang sẵn. Vì thế ta phải nạp Paths sẵn để có thể lấy được ID Của từng thằng.

import { getAllPostIds, getPostData } from '../../lib/posts';
 
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
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

