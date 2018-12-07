FROM node:8.10.0-alpine

# Set a working directory
WORKDIR /usr/src/app

COPY ./package.json .

# Install Node.js dependencies
RUN npm install

# Copy application files
COPY ./ .

# Run the container under "node" user by default
#USER node

# Set NODE_ENV env variable to "production" for faster expressjs
ENV NODE_ENV production

CMD [ "npm", "run", "build" ]

ENTRYPOINT [ "node", "server" ]
