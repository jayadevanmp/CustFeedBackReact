FROM node:12.13.0
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . .
CMD ["npm","start"]

