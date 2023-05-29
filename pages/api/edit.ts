import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prismadb'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    return res.status(405).end()
  }

  try {
    const { currentUser } = await serverAuth(req)
    const { name, username, coverImage, profileImage, bio } = req.body;

    if (!name || !username) {
      throw new Error('missing fields')
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        name,
        username,
        bio,
        coverImage,
        profileImage
      }
    })
    return res.json(updatedUser)

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}