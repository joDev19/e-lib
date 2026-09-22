# ==========================================
# Étape 1 : Build & Compilation TypeScript
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json tsconfig.json ./

# Installation de TOUTES les dépendances (y compris typescript & devDependencies)
RUN npm ci

# Copie des sources
COPY . .

# Compilation TypeScript (génère généralement le dossier /app/dist)
RUN npm run build

# ==========================================
# Étape 2 : Image de Production légère
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Définition de l'environnement de production
ENV NODE_ENV=production

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation STRICTEMENT des dépendances de production
RUN npm ci --omit=dev && npm cache clean --force

# Copie du dossier compilé depuis l'étape de build
COPY --from=builder /app/dist ./dist

# Si tu as d'autres fichiers statiques ou templates non compilés (ex: mails, templates), copie-les ici :
# COPY --from=builder /app/src/templates ./dist/templates

# Port d'écoute de ton API Express
EXPOSE 3000

# Exécution du fichier JS principal compilé
# (Remplace "dist/index.js" par "dist/server.js" ou "dist/app.js" selon ton point d'entrée)
CMD ["node", "dist/index.js"]