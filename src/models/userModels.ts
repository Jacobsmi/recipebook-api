import { Prisma } from "@prisma/client";

const basicUserData = Prisma.validator<Prisma.UserArgs>()({
  select: { firstname: true, lastname: true, email: true, password: true },
});

export type BasicUserData = Prisma.UserGetPayload<typeof basicUserData>;