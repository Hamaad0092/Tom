FROM node:alpine

# Install curl
RUN apk add --no-cache curl

WORKDIR /app
COPY app.js .
CMD ["node", "app.js"]

