import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const post = {
  title: "Post 1",
  content:
    'Hey everyone! 👋 Are you ready to dive into the mind-bending world of quantum entanglement? 🌀 Get ready for a wild ride through the cosmos as we unravel one of the most perplexing phenomena in physics!. Imagine two particles, separated by vast distances, yet mysteriously connected in a way that defies classical intuition. That\'s quantum entanglement in a nutshell! 🥜 According to the principles of quantum mechanics, these particles can become entangled, meaning their properties become correlated in such a way that the state of one particle instantaneously influences the state of the other, regardless of the distance between them. Einstein famously referred to this as "spooky action at a distance". 👻',
};

await prisma.post.create({ data: post });
