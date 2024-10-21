# 1. Chọn Node.js base image
FROM node:18-alpine

# 2. Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# 3. Copy các file package.json và package-lock.json (hoặc yarn.lock)
COPY package.json yarn.lock ./

# 4. Cài đặt dependencies
RUN yarn install --frozen-lockfile

# 5. Copy toàn bộ mã nguồn của Docusaurus vào container
COPY . .

# 6. Build static files nếu bạn chạy build sản phẩm
RUN yarn build

# 7. Expose cổng Docusaurus sẽ sử dụng (mặc định là 3000)
EXPOSE 3000

# 8. Command để start Docusaurus server
CMD ["yarn", "start"]
