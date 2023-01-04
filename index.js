const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient

async function registerUser() {
    const result = await prisma.user.create({
        data: {
            email: "teste@gmail.com",
            name: "teste teste teste"
        }
    })

    console.log(result)

    await prisma.$disconnect()
}

async function updateUser() {
    const result = await prisma.user.update({
        data: {
            email: "teste1@gmail.com",
            name: "teste1 teste1 teste1"
        },
        where: {
            id: 1
        }
    })

    console.log(result)

    await prisma.$disconnect()
}

async function registerPost() {
    const result = await prisma.post.create({
        data: {
            title: "Hello world - part 2",
        }
    })

    console.log(result)

    await prisma.$disconnect()
}

async function connectPostWithUser() {
    const result = await prisma.post.update({
        data: {
            author: {
                connect: {
                    id: 1
                }
            }
        },
        where: {
            id: 2
        }
    })

    console.log(result)

    await prisma.$disconnect()
}

async function seachUserUnique() {
    const result = await prisma.user.findUnique({
        // rejectOnNotFound: true,
        where: {
            id: 1
        }
    })

    console.log(result)

    await prisma.$disconnect
}

async function seachSelect() {
    const result = await prisma.user.findMany({
        select: {
            name: true,
            posts: true
        }
    })

    // Que pira e essa, isso e de outro mundo
    console.log(result[0].posts[0])

    await prisma.$disconnect()
}

async function registerUserWithPostTogether() {
    const result = await prisma.user.create({
        data: {
            email: "teste23@gmail.com",
            name: "teste23",
            posts: {
                create: {
                    title: "Post do usuario 23"
                }
            }
        }

    })

    console.log(result)

    await prisma.$disconnect()
}

async function seachCaracter() {
    const result = await prisma.user.findMany({
        where: {
            name: {
                contains: "e"
            }
        }
    })

    console.log(result)

    await prisma.$disconnect()
}


