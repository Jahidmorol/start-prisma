import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "this is a title 2",
  //       content: "this is a content",
  //       authorName: "author is Jahid",
  //     },
  //   });
  //   console.log(result);

  const getAllFromDb = await prisma.post.findMany();
  console.log(getAllFromDb);
};

main();
