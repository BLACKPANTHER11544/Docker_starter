FROM node:22-alpine 
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json 

RUN npm ci
COPY . . 
RUN npx prisma generate --schema=src/prisma/schema.prisma
RUN npm run build
EXPOSE 8080 

CMD ["npm", "run", "start"]