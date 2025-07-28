#!/usr/bin/env node

// Custom build script for Vercel to handle our project structure
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

try {
  console.log('Starting NFZ Entertainment website build...');
  console.log('Current directory:', process.cwd());
  console.log('Files in current directory:', execSync('ls -la', { encoding: 'utf8' }));
  
  // Check if client directory exists
  if (!existsSync('client')) {
    throw new Error('client directory not found');
  }
  
  if (!existsSync('client/index.html')) {
    throw new Error('client/index.html not found');
  }
  
  console.log('Building frontend with Vite...');
  console.log('Files in client directory:', execSync('ls -la client/', { encoding: 'utf8' }));
  
  // Build the frontend using vite with the Vercel-specific config
  execSync('npx vite build --config vite.config.vercel.ts', { 
    stdio: 'inherit' 
  });
  
  console.log('Build completed successfully!');
  console.log('Output directory contents:', execSync('ls -la dist/public/', { encoding: 'utf8' }));
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}