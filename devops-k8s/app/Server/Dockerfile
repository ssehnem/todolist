FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -omit=optional
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]