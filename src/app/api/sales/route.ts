import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function GET() {
  const sales = await prisma.sale.findMany()

  return NextResponse.json(sales)
}

const saleSchema = z.object({
  customer_name: z.string(),
  product: z.string(),
  price: z.number(),
})

export async function POST(req: NextRequest) {
  const sale = await req.json()

  // eslint-disable-next-line camelcase
  const { customer_name, product, price } = saleSchema.parse(sale)

  const newSale = await prisma.sale.create({
    data: {
      // eslint-disable-next-line camelcase
      customer_name,
      product,
      price,
    },
  })

  return NextResponse.json(newSale, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const id = parseInt(req.nextUrl.searchParams.get('id') || '')

  await prisma.sale.delete({
    where: { id },
  })

  return NextResponse.json({ status: 204 })
}
