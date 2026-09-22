FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# RUN npm ci --omit=dev
RUN npm ci

COPY . .

# Only for documentation
EXPOSE 4000

CMD ["npm", "run", "dev"]