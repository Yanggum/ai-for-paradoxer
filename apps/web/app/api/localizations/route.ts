import { Prisma } from "@prisma/client";
import prisma from './../../db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const test = searchParams.get('test') as string

  let localizations: UserDetail[] = []

  if (test) {
    localizations = await prisma.user.findMany({
    })
  }

  return NextResponse.json(localizations)
}

const user = Prisma.validator<Prisma.UserDefaultArgs>()({
})

export type UserDetail = Prisma.UserGetPayload<typeof user>
