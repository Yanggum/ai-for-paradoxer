import { Localization } from '../../components/Localization/Localization'
import Loading from './loading'
import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions, CurrentSession } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function getUserIds({ userId = '' }: { userId: string }) {
  const url = `${process.env.NEXT_PUBLIC_PORTAL_BASE_URL}/api/test?userId=${userId}`
  //const res = await fetch(url, { cache: 'no-store' })

  return {}//res.json()
}

export default async function Page() {
  const session = await getServerSession(authOptions)

  // TODO
  // if (!session || !session.user) {
  //   redirect('/api/auth/signin')
  // }

  //const { user } = session as CurrentSession

  const users = [{}]//await getUserIds({  })

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Localization users={users} />
      </Suspense>
    </>
  )
}
