import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const links = await prisma.link.findMany({
    where: { userId },
    include: {
      _count: { select: { clicks: true } },
    },
  });

  const totalClicks = links.reduce((sum, link) => sum + link._count.clicks, 0);
  const totalLinks = links.length;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const clicksToday = await prisma.click.count({
    where: {
      link: { userId },
      createdAt: { gte: today },
    },
  });

  return NextResponse.json({ totalClicks, totalLinks, clicksToday, links });
}
