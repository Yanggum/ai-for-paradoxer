import { AppShell as MantineAppShell, AppShellFooter, AppShellHeader, AppShellMain, Group, Image } from '@mantine/core'
import React, { ReactNode } from 'react'
import classes from './AppShell.module.css'
import '@mantine/dates/styles.css'
import SignOutButton from './../SignOutButton'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <MantineAppShell header={{ height: 60 }} footer={{ height: 40 }} padding='md'>
      <AppShellHeader className={classes.header}>
        <Group>
          <Image src='/portal-logo.png' className={classes.logo} />
        </Group>
        <Group>
          <SignOutButton />
        </Group>
      </AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
      <AppShellFooter className={classes.footer} />
    </MantineAppShell>
  )
}
