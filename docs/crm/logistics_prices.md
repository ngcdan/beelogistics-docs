---
sidebar_position: 2
sidebar: false
---

# Logistics Prices

Nghiệp vụ liên quan đến việc input hoặc lấy giá tự động từ giá của các Line/ Airline/ thầu phụ.

## 1. Truy cập App.

    Ở màn hình phần mềm, click chọn Logo công ty góc phải để vào danh sách modules. Click chọn Logistics Prices.

    ![1.gif](/img/crm/1.gif)

## 2. Màn hình Dashboard.

  Mặc định, phần mềm vào màn hình **Overview** (màn hình tổng quan).

  ![Screenshot 2024-10-18 at 16.34.22.png](/img/crm/Screenshot_2024-10-18_at_16.34.22.png)

  Bên phải là thanh điều hướng, cho phép chuyển đổi giữa các màn hình chức năng khác nhau có trong app.

  - **Monitor** là màn hình giám sát, gồm các thông tin như phân quyền, băng thông sử dụng, tên người dùng truy cập, …
  - Phần **Ocean Freight (FCL)** bao gồm:
      - **My Pricing List**: quản lý giá của user input.
      - **Export Pricing**: danh sách giá FCL Export trong hệ thống.
      - **New FCL Export**: màn hình input dữ liệu FCL Export.
      - **Import Pricing**: danh sách giá FCL Import trong hệ thống.
      - **New FCL Import**: màn hình input dữ liệu FCL Import.
  - Tương tự với các phần khác….

## 3 .My Pricing List - quản lý giá do mình input
  - ở thanh điều hướng click chọn **My Pricing List (Logistics)** → chọn giá xe cont hoặc giá xe tải.

  ![Screenshot 2024-10-18 at 16.50.02.png](/img/crm/Screenshot_2024-10-18_at_16.50.02.png)

### - **Chức năng:**
### a. Copy dữ liệu (copy theo dòng hoặc copy nhiều dòng), thao tác như hình ở dưới.
    <!-- [https://youtu.be/X-5uc2S5oBM](https://youtu.be/X-5uc2S5oBM) -->

  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
    <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/X-5uc2S5oBM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
  </div>

### b. Chức năng xoá dữ liệu, chỉnh sửa dữ liệu trên bảng.

### c. Chức năng xuất dữ liệu theo định dạng excel.

## 4 . Màn hình danh sách giá

  Màn hình danh sách bảng giá theo từng loại hình được highlight như hình dưới:

  **Demo:**
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
          <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/FQw5YE_dAYs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          />
      </div>

## 5 .Nhập liệu, upload bảng giá  FCL/ LCL, Air.
  - ở thanh điều hướng click chọn **New FCL Export - Ocean Freight (FCL).**
  - Màn hình gồm 2 phần: Form thông tin chung và bảng dữ liệu:

  ![Screenshot 2024-10-18 at 17.22.55.png](/img/crm/Screenshot_2024-10-18_at_17.22.55.png)

  ---

  **Form Thông Tin Chung:**

  - Đây là thông tin chung áp dụng cho tất cả các dữ liệu bảng giá phía dưới.
  - Các trường thông tin bắt buộc phải điền bao gồm: *Currency*, *Effective Date*, và *Valid To Date*.
  - Các thông tin khác như *Carrier*, *Agent*, *Port Of Loading*, *Port Of Discharge*, v.v., là thông tin tùy chọn, không bắt buộc nhập.

  **Bảng dữ liệu**: màn hình thông tin giá nhập từ giao diện (*Add*) hoặc từ file excel (*Upload*).

  **Các Nút Chức Năng:**

  - **Add**: Thêm một dòng mới vào bảng giá.
  - **Del**: Xóa dòng được chọn bằng cách tick vào ô tương ứng.
  - **Upload**: Tải, input dữ liệu từ file Excel.
  - **Template**: Tải xuống file Excel template dùng để upload dữ liệu.
  - **Clear**: Xóa toàn bộ dữ liệu hiển thị trên màn hình bảng giá (chỉ xóa dữ liệu hiển thị, không làm mất dữ liệu đã được upload).
  - **Save Change**: Lưu lại tất cả các thay đổi trên màn hình nhập dữ liệu.

  **Quy trình ưu tiên** là nếu dữ liệu upload từ file excel có sẵn thì lấy dữ liệu từ file Excel trước; nếu không có dữ liệu trong Excel thì mới lấy từ form thông tin chung.

  **Lưu ý:**

  - Các thông tin hiển thị trên màn hình này sẽ chưa được lưu cho đến khi người dùng nhấn nút ***Save Change***.

  **Demo:**
  [https://youtu.be/1eOtZOrJniU](https://youtu.be/1eOtZOrJniU)

  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
    <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src="https://www.youtube.com/embed/1eOtZOrJniU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
  </div>

## 6 .Nhập liệu, upload bảng giá trucking (Cont/ Truck)

###  a. Xe tải
  ![Screenshot 2024-10-18 at 08.01.19.png](/img/crm/Screenshot_2024-10-18_at_08.01.19.png)

  Chuẩn bị file excel dữ liệu , có thể chia nhiều sheet cho nhiều thầu phụ.

  Download file mẫu theo link: [*https://adminbeelogistics-my.sharepoint.com/:x:/g/personal/jesse_vnhph_beelogistics_com/EWhZI38zTGBCvQDWIVCLyOQBwu66JktPkZdVM8Tl_jSgJA?e=dUGcqw*](https://adminbeelogistics-my.sharepoint.com/:x:/g/personal/jesse_vnhph_beelogistics_com/EWhZI38zTGBCvQDWIVCLyOQBwu66JktPkZdVM8Tl_jSgJA?e=dUGcqw)

  - Sau khi chuẩn bị xong file excel, ở màn hình dashboard click chọn nút **Truck**

  ![Screenshot 2024-10-18 at 08.26.10.png](/img/crm/Screenshot_2024-10-18_at_08.26.10.png)

  - Thao tác choose file và tiến hành upload.
  [https://youtu.be/oEc6o5bTyII](https://youtu.be/oEc6o5bTyII)

  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
    <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src="https://www.youtube.com/embed/oEc6o5bTyII"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
  </div>


  - Phần mềm thông báo thông tin upload, kiểm tra lại thông tin ở màn hình bên dưới, có thể

  chỉnh sửa lại nếu cần. Click ***Save Changes** để tiến hành lưu dữ liệu**.***

  Kiểm tra lại dữ liệu vừa upload, ở sidebar chọn **My Pricing List**

  ![Screenshot 2024-10-18 at 08.32.19.png](/img/crm/Screenshot_2024-10-18_at_08.32.19.png)

### b. Xe Cont

  ![Screenshot 2024-10-18 at 08.17.39.png](/img/crm/Screenshot_2024-10-18_at_08.17.39.png)

  Chuẩn bị file excel dữ liệu , có thể chia nhiều sheet cho nhiều thầu phụ.

  Download file mẫu theo link: [*https://adminbeelogistics-my.sharepoint.com/:x:/g/personal/jesse_vnhph_beelogistics_com/EWhZI38zTGBCvQDWIVCLyOQBwu66JktPkZdVM8Tl_jSgJA?e=dUGcqw*](https://adminbeelogistics-my.sharepoint.com/:x:/g/personal/jesse_vnhph_beelogistics_com/EaFHoJWIflZEnuBuKdrRgkwBIPOsQLbjEyWp2zzLGkC39w?e=8y3qrG)

  - Sau khi chuẩn bị xong file excel, ở màn hình dashboard click chọn nút **Container**.

  ![Screenshot 2024-10-18 at 08.17.59.png](/img/crm/Screenshot_2024-10-18_at_08.17.59.png)

  - Thao tác choose file và tiến hành upload.

  ![Screenshot 2024-10-18 at 08.20.11.png](/img/crm/Screenshot_2024-10-18_at_08.20.11.png)

  - Phần mềm thông báo thông tin upload, kiểm tra lại thông tin ở màn hình bên dưới, có thể

  chỉnh sửa lại nếu cần. Click ***Save Changes** để tiến hành lưu dữ liệu**.***

  ![Screenshot 2024-10-18 at 08.24.15.png](/img/crm/Screenshot_2024-10-18_at_08.24.15.png)

  Kiểm tra lại dữ liệu vừa upload, ở sidebar chọn **My Pricing List → Chọn My Container Pricing.**