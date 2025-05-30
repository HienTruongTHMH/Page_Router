import '../styles/global.css';
// Chức năng của _app.js

/*
    Áp dụng layout chung cho toàn bộ ứng dụng:
        Bạn có thể bao bọc tất cả các trang trong một layout chung (như header, footer, thanh điều hướng) bằng cách sử dụng _app.js.
        Thêm các thành phần toàn cục:
        Đây là nơi lý tưởng để tích hợp các thành phần như Context Providers, Redux, hoặc các công cụ theo dõi như Google Analytics.
        Nhập CSS toàn cục:
        Bạn nên nhập các tệp CSS toàn cục (ví dụ: global.css) trong _app.js để áp dụng kiểu dáng cho toàn bộ ứng dụng.
        Quản lý trạng thái và logic toàn cục:
        Bạn có thể thiết lập các logic xử lý lỗi, xác thực người dùng, hoặc bất kỳ trạng thái nào cần được chia sẻ giữa các trang.
*/
export default function App ({ Component, pageProps}) {
    // Với component là đại diện cho các component Hiện Tại đang được render.
    // Và pageProps là các props được truyền vào trang.
    return <Component {...pageProps}/>;
}