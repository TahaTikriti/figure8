import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the absolute path to the partners directory
    const partnersDir = path.join(process.cwd(), 'public', 'images', 'partners');
    
    // Read the directory
    const files = fs.readdirSync(partnersDir);
    
    // Filter for image files and create partner objects
    const partners = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => {
        // Create a partner name from the filename
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

    return NextResponse.json(partners);
  } catch (error) {
    console.error('Error reading partners directory:', error);
    return NextResponse.json({ error: 'Failed to load partners' }, { status: 500 });
  }
}