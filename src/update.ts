import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 7,
    },
    data: {
      //   title: "Title 7",
      content: "updated Content 7",
      // authorName: "Author 4"
    },
  });

  //   update many
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "this is a title 2",
    },
    data: {
      published: true,
    },
  });

  //   const upsertData = await prisma.post.upsert({
  //     where: {
  //       id: 9,
  //     },
  //     update: {
  //       authorName: "Jahid",
  //     },
  //     create: {
  //       title: "this is new title",
  //       content: "this is new content",
  //     },
  //   });

  //   console.log(upsertData);
};

updates();
