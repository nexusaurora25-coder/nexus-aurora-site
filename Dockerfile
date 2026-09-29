# Build stage: client bundle + SSR prerender (npm run build writes one HTML file per page into dist/)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Vite bakes VITE_* values into the bundle at build time — pass them as Dokploy build args.
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG VITE_WACRM_SUPABASE_URL
ARG VITE_WACRM_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL \
    VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY \
    VITE_WACRM_SUPABASE_URL=$VITE_WACRM_SUPABASE_URL \
    VITE_WACRM_SUPABASE_ANON_KEY=$VITE_WACRM_SUPABASE_ANON_KEY
RUN npm run build

# Serve stage: plain nginx with a config that understands the prerendered flat .html files
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
