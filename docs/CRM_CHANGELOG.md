---
sidebar_position: 2
---

# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## Planning
| Timeline      | Status  | Task                                                | Description                                              |
|:--------------|:--------|:----------------------------------------------------|:---------------------------------------------------------|
| 2024-04-14    | Done    | Cập nhật code, Setup máy dev-1 để chuẩn bị cho demo | Remove hết dữ liệu bảng giá để mọi người nhập lại từ đầu |
| 2024-04-15    | Done    | Kiểm tra code, test lại chuẩn bị trước khi demo     | ...                                                      |
| 2024-04-16    | Done    | Meeting with team c Vicky, demo cách dùng           | Support team c Vicky, fix bugs, cập nhật feedback        |
| 2024-04-23    | Pending | Demo CRM with BOD                                   | Support team Sales HP, fix bugs, cập nhật feedback       |

### Changed

_Format: [Task Desc - Link merge request,...]_

### TODO
Please read and note the below task carefully.
Make sure you fulfill all of them before filing an issue.

1. <input type="checkbox" disabled /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'red' }}>#price</span> Setup mail request pricing cho BEEHAN.

2. <input type="checkbox" disabled /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'red' }}>#price</span> Template upload giá LCL Export.
- LCC ở dest: biến động, chia theo COLOADER CNEE, DIRECT CNEE
- Tạo thêm cột cho template/ render trên UI.

2. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync thông tin (BfSOne username, bfsone contact ID, email, name) cho employee công ty BEEHCM, BEEDAD.

3. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync lại thông tin Location (Airport) từ bfsone.

4. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Email lúc tạo, tự động fetch thông tin từ account

5. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>#price</span> Cấu hình Minimum profit/ profit margin cho customer charge (Giá bán cho khách)
   - Minimum profit (Mức giá tối thiểu được bán cho khách - liên quan đến internal nhiều hơn)
   - Profit Margin: External - Margin apply lên giá để chào cho khách khi khách match giá.

6. <input type="checkbox" disabled /> <span style={{ color: 'green' }}>[Low]</span> - <span style={{ backgroundColor: 'yellow' }}>#price</span> Generate template email client, pricing - màn hình quotation (đợi user thống nhất form mail)


### [R20241007]

1. <input type="checkbox" disabled checked/> <span style={{ color: 'orange' }}> [Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Tổ chức lại menu, màn hình My Pricing List cho Air, Truck, Container, CBT, ...

2. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Communication, đổi searchMessageAccount thành groovy mới. (support cho các tác vụ liên quan đến email)

3. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}> [Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Enhance seach/ chọn thông tin cảng, sân bay

4. <input type="checkbox" disabled checked/> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync thông tin email cho employee trong hệ thống.


### [R20241006]

1. <input type="checkbox" disabled checked /> <span style={{ color: 'red' }}>[High]</span> - [Bugs] - Fix lỗi chữ ký mail(Phone) note bị cut nội dung lúc gửi email check giá.

2. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - [Enhance] Tổ chức lại menu, màn hình My Pricing List cho Sea FCL, Sea LCL