import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.createMany({
    data: [
      {
        title: "this is a title 5",
        content: "this is a content",
        authorName: "author is Jahid",
      },
      {
        title: "this is a title 6",
        content: "this is a content",
        authorName: "author is Jahid",
      },
      {
        title: "this is a title 7",
        content: "this is a content",
        authorName: "author is Jahid",
      },
    ],
  });

  console.log(result);
};

main();
