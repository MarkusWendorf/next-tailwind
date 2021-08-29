FROM node:16-alpine3.14 AS build

WORKDIR /nextjs

# Cache dependencies if package.json is unchanged
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . /nextjs/

# Build application
RUN npm run build

# Remove devDependencies
RUN npm prune --production


FROM node:16-alpine3.14

# Copy application to runtime image
COPY --from=0 /nextjs .

EXPOSE 8080

CMD ["node", "/node_modules/next/dist/bin/next", "start", "-p", "8080"]