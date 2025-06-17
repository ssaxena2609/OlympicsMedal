import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Reading the medals data from the JSON file
    const jsonDirectory = path.join(process.cwd(), 'public/data');
    const fileContents = await fs.readFile(jsonDirectory + '/medals.json', 'utf8');
    const data = JSON.parse(fileContents);

    // Send the response
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    });
  } catch (error) {
    console.error('Error reading medals data:', error);
    return NextResponse.json(
      { error: 'Failed to load medal data' },
      { status: 500 }
    );
  }
}
