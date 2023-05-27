import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prismadb'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const { userId } = req.query

    if (!userId || typeof userId !== 'string') {
      throw new Error('invalid ID')
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    const followingIds = prisma.user.count({
      where: {
        followingIds: {
          has: userId
        }
      }
    })
    return res.json({ ...user, followingIds })

  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}