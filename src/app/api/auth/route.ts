import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: 401 },
    )
  }

  const isPasswordValid = password === user.password

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h',
  })

  return NextResponse.json(token)
}
