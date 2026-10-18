# Thư Viện Mộc

Website React/Vite quản lý thư viện sách vật lý, với hình minh họa thư viện mang không khí light novel / anime fantasy nhẹ nhàng.

## Chạy dự án

```powershell
npm install
npm start
```

Mở http://localhost:5173. Tạo bản production bằng `npm run build` và xem bằng `npm run preview`.

## Nội dung

- Tổng quan: gợi ý sách trong thư viện, sách mới thêm, nhóm sách, giá trị bộ sưu tập.
- Kho sách: tìm kiếm, lọc thể loại và tình trạng, sắp xếp, chế độ lưới/danh sách, thêm/sửa/xóa/khôi phục, yêu thích, xuất CSV.
- Bộ sưu tập: nhóm theo thể loại, yêu thích, tạo bộ sưu tập riêng và chọn sách.
- Mượn & trả: tạo phiếu mượn, tên người mượn, ngày hẹn, nhận lại sách.
- Thống kê: số đầu sách, số cuốn, giá trị, nhà xuất bản, thể loại.
- Cài đặt: tên thư viện, tên hiển thị, tải bản sao JSON.
- Hồ sơ: avatar tải từ thiết bị, giới thiệu, vị trí, mục tiêu bộ sưu tập và góc sách yêu thích. Mở từ tên ở thanh bên hoặc menu avatar góc phải.
- Thống kê mới: bộ lọc theo năm mua, biểu đồ số cuốn/chi phí theo tháng, phân bố thể loại theo số đầu sách/giá trị, xếp hạng nhà xuất bản và sách có giá cao nhất.

Dữ liệu khởi tạo từ `Physics Books Library - Sheet1.csv`. Các thông tin bổ sung ở bản dựng đầu tiên (ngày mua, kệ, số lượng) là dữ liệu mẫu cần được người dùng cập nhật. Thay đổi được lưu trong localStorage của trình duyệt; ứng dụng hiện chưa có tài khoản, máy chủ hoặc đồng bộ nhiều thiết bị.

Ảnh AI nằm trong `public/art`; mô tả và prompt được lưu tại `public/art/README.md`.
