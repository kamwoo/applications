import { type NextApiResponse, type NextApiRequest } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const allUsers = await client.user.findMany({
      where: {
        name: "kam",
      },
    });

    return res.json({ ok: true, result: allUsers });
  }
  if (req.method === "POST") {
    const newUser = await client.user.create({
      data: {
        name: "kam",
        email: "asd",
        image: "",
      },
    });

    return res.json({ ok: true, result: newUser });
  }
  if (req.method === "PUT") {
    return res.json({ ok: true });
  }
  if (req.method === "DELETE") {
    return res.json({ ok: true });
  }
}
