---
sidebar_position: 2
---

# Changelog

All notable changes to this project will be documented in this file.

## Planning
| Timeline      | Status  | Task                                                | Description                                              |
|:--------------|:--------|:----------------------------------------------------|:---------------------------------------------------------|
| 2024-11-07    | Doing   | Support team Sales HP, HAN                          | Support team Sales HP, HAN fix bugs, cập nhật feedback       |

### Changed

_Format: [Task Desc - Link merge request,...]_

### TODO [Unreleased]
Please read and note the below task carefully.
Make sure you fulfill all of them before filing an issue.

1. <input type="checkbox" disabled /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#sales</span> Hoàn thiện các màn hình, chức năng module sales.

2. <input type="checkbox" disabled /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#system</span> Enhance thông báo lỗi gửi từ server hiển thị cho users.

3. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync thông tin (BfSOne username, bfsone contact ID, email, name) cho employee công ty BEEHCM, BEEDAD.

4. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync lại thông tin Location (Airport) từ bfsone.

5. <input type="checkbox" disabled /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>#price</span> Cấu hình Minimum profit/ profit margin cho customer charge (Giá bán cho khách)
   - Minimum profit (Mức giá tối thiểu được bán cho khách - liên quan đến internal nhiều hơn)
   - Profit Margin: External - Margin apply lên giá để chào cho khách khi khách match giá.

6. <input type="checkbox" disabled /> <span style={{ color: 'green' }}>[Low]</span> - <span style={{ backgroundColor: 'yellow' }}>#price</span> Generate template email client, pricing - màn hình quotation (đợi user thống nhất form mail)

7. <input type="checkbox" disabled /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'red' }}>#sales</span> Cập nhật hướng dẫn module sales

### [R20241113]

1. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Bugs]</span> <span style={{ backgroundColor: 'yellow' }}>#sales</span> Fix lỗi thiếu note khi generate email.

2. <input type="checkbox" disabled checked /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'yellow' }}>[Security]</span> Fix lỗi phân quyền liên quan đến App Permission và login ID.

3. <input type="checkbox" disabled checked /> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'yellow' }}>[Security]</span> Phân tích và clean tài khoản bị trùng login ID do normalize login ID theo lowercase.

4. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#sales</span> Thêm tính năng quản lý mail request, cho phép user copy và gửi lại yêu cầu.

5. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#sales</span> Cải thiện giao diện và trải nghiệm người dùng cho màn hình match price.

6. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Hoàn thiện màn hình My Pricing List, Upload data cho truck prices.

### [R20241111]

1. <input type="checkbox" disabled checked/> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'red' }}>#price</span> Setup mail request pricing cho BEEHAN.

2. <input type="checkbox" disabled checked/> <span style={{ color: 'red' }}>[High]</span> - <span style={{ backgroundColor: 'red' }}>#price</span> Template upload giá LCL Export.
- LCC ở dest: biến động, chia theo COLOADER CNEE, DIRECT CNEE
- Tạo thêm cột cho template/ render trên UI.

3. <input type="checkbox" disabled checked/> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Email lúc tạo, tự động fetch thông tin từ account


### [R20241107]

1. <input type="checkbox" disabled checked/> <span style={{ color: 'orange' }}> [Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Tổ chức lại menu, màn hình My Pricing List cho Air, Truck, Container, CBT, ...

2. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Communication, đổi searchMessageAccount thành groovy mới. (support cho các tác vụ liên quan đến email)

3. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}> [Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Enhance]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Enhance seach/ chọn thông tin cảng, sân bay

4. <input type="checkbox" disabled checked/> <span style={{ color: 'orange' }}>[Medium]</span> - <span style={{ backgroundColor: 'yellow' }}>[Feature]</span> <span style={{ backgroundColor: 'yellow' }}>#price</span> Sync thông tin email cho employee trong hệ thống.


### [R20241106]

1. <input type="checkbox" disabled checked /> <span style={{ color: 'red' }}>[High]</span> - [Bugs] - Fix lỗi chữ ký mail(Phone) note bị cut nội dung lúc gửi email check giá.

2. <input type="checkbox" disabled checked /> <span style={{ color: 'orange' }}>[Medium]</span> - [Enhance] Tổ chức lại menu, màn hình My Pricing List cho Sea FCL, Sea LCL