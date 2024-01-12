FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm install --legacy-peer-deps

CMD [ "npm", "run", "dev" ]


#docker build . -t nestjs-be
#docker run -d -p 8080:8080 --name nestjs-docker nestjs-be