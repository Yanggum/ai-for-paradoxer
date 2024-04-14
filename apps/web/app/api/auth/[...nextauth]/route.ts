import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// noinspection ES6ShorthandObjectProperty
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'AUTH',
      name: 'Credentials',
      credentials: {
      },
      async authorize(credentials) {
        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  logger: {
    error(code, metadata) {
      console.log({ type: 'inside error logger', code, metadata })
    },
    warn(code) {
      console.log({ type: 'inside warn logger', code })
    },
    debug(code, metadata) {
      console.log({ type: 'inside debug logger', code, metadata })
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ token }) {
      return token as unknown as Session
    },
  },
}

export const handler = NextAuth(authOptions)

export interface CurrentSession extends Session {
  user?: {
  }
}

export { handler as GET, handler as POST }
