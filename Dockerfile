# Dockerfile

# base image
FROM node:16.14.2

# set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /

# install dependencies
RUN npm install

# copy source files
COPY ./components /components
COPY ./pages /pages
COPY ./styles /styles
COPY ./public /public

# build and serve the app
RUN npm run build
EXPOSE 3000
CMD npm run start
