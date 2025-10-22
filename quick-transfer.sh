#!/bin/bash

echo "📦 Creating project archive..."
tar -czf trart-website.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=*.log \
  .

echo "🚀 Transferring to VM..."
gcloud compute scp trart-website.tar.gz pranav@pranav-cloud-console:/home/pranav/projects/trart-website/ --zone=us-central1-a

echo "✅ Done! Now extract on VM with:"
echo "cd /home/pranav/projects/trart-website && tar -xzf trart-website.tar.gz"