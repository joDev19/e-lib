# Étape 1 : Build de l'application
FROM node:20-alpine AS build-stage

WORKDIR /app

# Optimisation du cache Docker pour les dépendances
COPY package*.json ./
RUN npm ci

# Copie des sources et compilation
COPY . .
RUN npm run build

# Étape 2 : Serveur de production Nginx
FROM nginx:alpine AS production-stage

# Copie des assets statiques compilés (adapter 'dist' si ton bundler utilise un autre dossier)
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuration Nginx pour gérer le routage SPA (Vue Router)
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
    root /usr/share/nginx/html;\n\
    index index.html index.htm;\n\
    try_files $uri $uri/ /index.html;\n\
    }\n\
    }\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]