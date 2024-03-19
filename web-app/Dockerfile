FROM node:20

# Install production dependencies.
# Copy package.json, package-lock.json, and next.config.js
# If you're using yarn, you'll copy the yarn.lock instead of package-lock.json

WORKDIR /web-app

COPY package.json package-lock.json next.config.mjs ./

RUN npm install

COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 4000

# Run the web service on container startup.
CMD [ "npm", "start" ]
