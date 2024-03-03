FROM node:14-alpine

# Any command after this will be executed relative to this directory
WORKDIR /usr/app

# COPY <path to folder to copy from on *your machine* relative to build context> <place to copy stuff to inside *the container*>
COPY ./package.json ./

RUN npm install

COPY ./ ./


CMD ["npm", "start"]