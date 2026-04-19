#!/bin/sh
echo "Syncing database schema..."
npx prisma db push --skip-generate --accept-data-loss 2>&1 || echo "DB push failed, continuing..."
echo "Starting server..."
exec node server.js
