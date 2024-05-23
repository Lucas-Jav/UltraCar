FROM node:20 as ultra_car

WORKDIR /app

COPY package*.json ./  

RUN npm install -g bun

RUN npm install --legacy-peer-deps

COPY . . 

EXPOSE 5153

CMD ["bun", "run", "dev"]

