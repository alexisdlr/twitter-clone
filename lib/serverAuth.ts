import {getSession} from 'next-auth/react'
import {NextApiRequest} from 'next'
import prisma from '@/lib/prismadb'

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({req})

  if(!session?.user?.email) throw new Error('not signed in')

  const currentUser = await prisma.user.findUnique({
    where: {
      email:session.user.email       
    }
  })

  if (!currentUser)  throw new Error('User not exists')

  return {currentUser}
}

export default serverAuth