import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "PUT") {
        await prisma.product.update({
            where: {
                id: parseInt(req.body.id),
            },
            data: {
                bought: true,
            },
        });
        res.status(200).json({ message: "Updated" });
    } else {
        res.status(500).json({ message: "Not found" });
    }
}