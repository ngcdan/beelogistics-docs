---
sidebar_position: 3
toc: false
---

# Prices: Tìm kiếm giá

Dưới đây là hướng dẫn chi tiết về cách sử dụng các tính năng tìm kiếm:

## Giao diện tổng quan

Khi truy cập vào Dashboard của module, bạn sẽ thấy:

- Bên trái: Sidebar hiển thị danh sách các loại hình giá.
- Bên phải: Màn hình chính hiển thị danh sách giá tương ứng với loại hình được chọn.

Ví dụ, khi chọn "Import Pricing", màn hình sẽ hiển thị như sau:

![6_img1.png](./img/6_img1.png)

Mặc định, hệ thống sẽ hiển thị các giá đang có hiệu lực (ngày hết hạn lớn hơn ngày hiện tại).

## Phương pháp tìm kiếm

Có hai cách chính để tìm kiếm giá:

![6_img2.png](./img/6_img2.png)

### 1. Tìm kiếm nhanh

Sử dụng thanh tìm kiếm ở góc trên cùng để nhập từ khóa. Hệ thống sẽ tìm kiếm trong tất cả thông tin hiển thị trên màn hình.

### 2. Tìm kiếm nâng cao

Click vào biểu tượng kính lúp ở góc phải để mở rộng các tiêu chí tìm kiếm:

- **Carrier, Agent:** Tìm theo hãng tàu hoặc đại lý
- **Pricing Creator:** Tìm theo người tạo giá
- **Ready To Load:** ngày hàng ready, phần mềm dựa theo ngày này để tìm kiếm tất cả giá trong hệ thống thoả mãn

  `ngày tạo < ready to load < ngày valid to`

- **From Location, To Location:** Tìm theo cảng đi và cảng đến
- **Valid To:** Tìm kiếm giá theo khoảng ngày, mặc định lock, mở bằng cách xoá giá trị ở Ready To Load.

  (chỉ sử dụng 1 trong 2 tiêu chí, không sử dụng đồng thời).

- **Verify:**
    - Waiting: Bảng giá chưa được approve
    - Verified: Bảng giá đã được approve.

- **Max Return:** Số lượng kết quả hiển thị tối đa

Sau khi điền các tiêu chí, nhấn "Search" để thực hiện tìm kiếm:

![6_img3.png](./img/6_img3.png)

Lưu ý: Phương pháp tìm kiếm này áp dụng tương tự cho các màn hình khác trong module Prices.
