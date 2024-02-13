FROM node:21.6
WORKDIR /app
COPY . . 
RUN npm install -g pnpm
RUN pnpm i --force
CMD pnpm run dev
