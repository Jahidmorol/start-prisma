import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationPrisma = async () => {
  const pagination = await prisma.post.findMany({
    skip: 5,
    take: 3,
  });

  const cursorData = await prisma.post.findMany({
    // cursor mean by pagination starting point
    cursor: {
      id: 10,
    },
    skip: 5,
    take: 3,
  });

  const sorting = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 5,
    take: 3,
    where: {
      title: "this is a title 7",
    },
  });

  console.log(sorting);
};

paginationPrisma();
