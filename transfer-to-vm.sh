#!/bin/bash

# Transfer script for Trart website to VM
# Run this from your local machine in the Trart directory

echo "🚀 Transferring Trart website to VM..."

# Create tar file excluding unnecessary files
tar -czf trart-website.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=*.log \
  --exclude=.DS_Store \
  .

echo "📦 Created trart-website.tar.gz"

# Transfer to VM (pranav user home directory)
gcloud compute scp trart-website.tar.gz pranav-cloud-console:/home/pranav/trart-website/ --zone=us-central1-a

echo "✅ Files transferred to VM"
echo "🔧 Next: SSH to VM and extract files"
echo ""
echo "Commands to run on VM:"
echo "cd /home/pranav/trart-website"
echo "tar -xzf trart-website.tar.gz"
echo "rm trart-website.tar.gz"