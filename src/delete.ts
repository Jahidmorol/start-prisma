import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleting = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  const manyDelete = await prisma.post.deleteMany({
    where: {
      title: "this is a title 2",
    },
  });

  console.log(manyDelete);
};

deleting();
