import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions)

  // TODO
  // if (!session || !session.user) {
  //   redirect('/api/auth/signin')
  // }
  
  redirect('/localization')
}
