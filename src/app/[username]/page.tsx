import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import PublicProfile from './PublicProfile';

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: { username: params.username.toLowerCase() },
    select: { displayName: true, bio: true },
  });

  return {
    title: user?.displayName || params.username,
    description: user?.bio || `${params.username}'s DevTree`,
  };
}

export default async function UserPage({ params }: { params: { username: string } }) {
  const user = await prisma.user.findUnique({
    where: { username: params.username.toLowerCase() },
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
        select: { id: true, title: true, url: true, icon: true },
      },
    },
  });

  if (!user) {
    notFound();
  }

  return <PublicProfile user={user} />;
}
