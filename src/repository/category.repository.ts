import prisma from "../utils/prisma";

export const createCategory = async (category: any) => {
  try {
    const data = await prisma.category.create({
      data: { ...category },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong or category already exist");
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const data = await prisma.category.findUnique({
      where: { id },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getAllCategory = async () => {
  try {
    const data = await prisma.category.findMany({});
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
