FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG REACT_APP_API_BASE_URL
RUN REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL npm run build


FROM nginx:1.23-alpine


COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]