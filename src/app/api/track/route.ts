import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { linkId } = body;

    if (!linkId) {
      return NextResponse.json({ error: 'Missing linkId' }, { status: 400 });
    }

    const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? null;
    const userAgent = req.headers.get('user-agent') ?? null;

    await prisma.click.create({
      data: {
        linkId,
        ip,
        userAgent,
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 });
  }
}
