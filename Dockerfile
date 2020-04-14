FROM node:12.16.2-alpine3.10

# Cache dependencies if package.json is unchanged
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . ./
# Build application
RUN npm run build

CMD ["npm", "run", "serve"]