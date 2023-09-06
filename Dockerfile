FROM node:20-alpine3.17 as build

# Install pnpm

RUN npm install -g pnpm

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN pnpm install

# Bundle app source

COPY . .

# Build app

RUN pnpm build-storybook 

FROM nginx:1.25.2-alpine as production

COPY --from=build /usr/src/app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
