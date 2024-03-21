import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getAllFromDb = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      //   id: 4,
      published: false,
    },
  });

  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 4,
    },
    select: {
      title: true,
    },
  });

  console.log(findUnique);
};

main();
