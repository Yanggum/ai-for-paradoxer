'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'

function SignOutButton() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <Button leftSection={<IconLogout size={16} />} onClick={() => signOut()} size={'xs'} color={'red'}>
        Sign Out
      </Button>
    )
  }

  return <></>
}

export default SignOutButton
