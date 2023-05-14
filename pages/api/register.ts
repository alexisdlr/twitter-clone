import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prismadb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') res.status(405).end()
  const { email, username, password, name } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (user) return res.status(500).json('User already exists')

    const userCreated = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword
      }
    })
    res.status(200).json(userCreated)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
