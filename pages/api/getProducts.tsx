import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const data = await prisma.product.findMany();
        return res.status(200).json(data);
    } catch(error) {
        res.status(500);
    }
}