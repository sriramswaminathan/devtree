import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: { username: string } }) {
  const username = params.username.toLowerCase();

  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      displayName: true,
      bio: true,
      avatar: true,
      theme: true,
      links: {
        where: { active: true },
        orderBy: { order: 'asc' },
        select: {
          id: true,
          title: true,
          url: true,
          icon: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user });
}
