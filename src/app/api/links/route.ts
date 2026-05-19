import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const userId = req.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { title, url, icon } = body;

  if (!title || !url) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const count = await prisma.link.count({ where: { userId } });

  const link = await prisma.link.create({
    data: {
      userId,
      title,
      url,
      icon: icon || 'link',
      order: count,
    },
  });

  return NextResponse.json({ link });
}

export async function PUT(req: NextRequest) {
  const userId = req.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { id, title, url, icon, active, order } = body;

  const existing = await prisma.link.findFirst({ where: { id, userId } });
  if (!existing) {
    return NextResponse.json({ error: 'Link not found' }, { status: 404 });
  }

  const link = await prisma.link.update({
    where: { id },
    data: { title, url, icon, active, order },
  });

  return NextResponse.json({ link });
}

export async function DELETE(req: NextRequest) {
  const userId = req.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const existing = await prisma.link.findFirst({ where: { id, userId } });
  if (!existing) {
    return NextResponse.json({ error: 'Link not found' }, { status: 404 });
  }

  await prisma.link.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
