FROM node:12.16.2-alpine3.10 AS build

WORKDIR /nextjs

# Cache dependencies if package.json is unchanged
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . /nextjs/

# Build application
RUN npm run build

FROM node:12-alpine

COPY --from=build /nextjs/package.json package.json
COPY --from=build /nextjs/package-lock.json package-lock.json
COPY --from=build /nextjs/.next .next
COPY --from=build /nextjs/public public

RUN npm install --production

EXPOSE 8080

CMD ["npm", "run", "serve"]