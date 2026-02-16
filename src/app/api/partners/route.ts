import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the absolute path to the partners directory
    const partnersDir = path.join(process.cwd(), 'public', 'images', 'partners');
    
    // Read the directory
    const files = await fs.readdir(partnersDir);
    
    // Filter for image files and create partner objects
    const partners = files
      .filter((file: string) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .sort((first: string, second: string) => first.localeCompare(second))
      .map((file: string) => {
        // Create a partner name from the filename
        const name = file
          .replace(/-\d+x\d+/, '') // Remove dimensions
          .replace(/\.[^/.]+$/, '') // Remove extension
          .split(/[-_]/) // Split by dash or underscore
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize words
          .join(' ');

        return {
          name,
          imagePath: file
        };
      });

    return NextResponse.json(partners, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading partners directory:', error);
    return NextResponse.json({ error: 'Failed to load partners' }, { status: 500 });
  }
}