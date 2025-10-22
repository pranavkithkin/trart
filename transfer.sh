#!/bin/bash

# Simple file transfer to VM
echo "📦 Creating archive..."

# Create tar excluding unnecessary files  
tar -czf trart-website.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=*.log \
  --exclude=.DS_Store \
  .

echo "🚀 Transferring to VM..."
gcloud compute scp trart-website.tar.gz pranav@pranav-cloud-console:/home/pranav/trart-website/ --zone=us-central1-a

echo "✅ Transfer complete!"
echo "Now run on VM: cd /home/pranav/trart-website && tar -xzf trart-website.tar.gz"