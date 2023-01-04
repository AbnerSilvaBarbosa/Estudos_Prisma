import { PrismaClient, Prisma } from "@prisma/client"
const prisma = new PrismaClient

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Aline",
        email: "aline@gmail.com",
        posts: {
            create: [
                {
                    title: "Fim do mundo",
                    content: "http://google.com",
                    published: true
                },
            ],
        },
    },
    {
        name: "Cleiton",
        email: "cleiton@gmail.com",
        posts: {
            create: [
                {
                    title: "A primeira laranja se chama laranja 👩",
                    content: "http://youtube.com",
                    published: true
                },
            ],
        },
    }
]


async function main() {
    console.log("start seeding ...")
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        })

        console.log(`Create user with id: ${user.id}`)
    }

    console.log("Seeding finished")

}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


//npm i -D ts-node typescript @types/node
// npx prisma db seed