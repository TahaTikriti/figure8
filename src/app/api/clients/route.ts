import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the absolute path to the clients directory
    const clientsDir = path.join(process.cwd(), 'public', 'images', 'clients');
    
    // Read the directory
    const files = fs.readdirSync(clientsDir);
    
    // Filter for image files and create client objects
    const clients = files
      .filter(file => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file))
      .map(file => {
        // Create a client name from the filename
        const name = file
          .replace(/-\d+x\d+/, '') // Remove dimensions
          .replace(/\.[^/.]+$/, '') // Remove extension
          .split(/[-_]/) // Split by dash or underscore
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize words
          .join(' ');

        return {
          name,
          imagePath: file
        };
      });

    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error reading clients directory:', error);
    return NextResponse.json({ error: 'Failed to load clients' }, { status: 500 });
  }
}
