import prisma from "../utils/prisma";

interface User {
  email: string;
  username: string;
  password: string;
}

export const createNewUser = async (user: User) => {
  try {
    const data = await prisma.user.create({ data: user });

    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something went wrong ");
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const data = await prisma.user.findUnique({
      where: { email },
      include: { cart: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getUserById = async (id: number) => {
  try {
    const data = await prisma.user.findUnique({
      where: { id },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getAllUser = async () => {
  try {
    const data = await prisma.user.findMany({});
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
