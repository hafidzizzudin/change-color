###################
# Build Stage 
###################

# select base image
FROM node:20-alpine3.17 As build

# define directory
WORKDIR /app

# copy app files to working directory
COPY --chown=node:node . .

# install dependencies
RUN npm install

# build
RUN npm run build

###################
# Serve Application using Nginx Server
###################
FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80

