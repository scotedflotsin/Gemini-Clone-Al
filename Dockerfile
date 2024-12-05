FROM node:20

WORKDIR /gemini

COPY  . .

EXPOSE 5173

RUN npm i

CMD ["npm", "run", "dev"]