import prisma from "../utils/prisma";

export const createProduct = async (categoryId: number, product: any) => {
  try {
    const data = await prisma.product.create({
      data: { ...product, category: { connect: { id: categoryId } } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getAllProduct = async () => {
  try {
    const data = await prisma.product.findMany({
      include: { category: true },
    });
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something went wrong ");
  }
};

export const getproductById = async (id: number) => {
  try {
    const data = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
