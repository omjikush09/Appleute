import prisma from "../utils/prisma";

export const createCart = async (userId: number) => {
  try {
    const data = await prisma.cart.create({
      data: { user: { connect: { id: userId } } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getCartById = async (id: number) => {
  try {
    const data = await prisma.cart.findUnique({
      where: { id },
      include: { products: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
export const getCartByUserId = async (userId: number) => {
  try {
    const data = await prisma.cart.findUnique({
      where: { userId },
      include: { products: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const addItemToCart = async (cartId: number, productId: number) => {
  try {
    const data = await prisma.cart.update({
      where: { id: cartId },
      data: { products: { connect: [{ id: productId }] } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong  ");
  }
};

export const addItemsToCart = async (cartId: number, productIds: number[]) => {
  const productObject = productIds.map((productid) => {
    return { id: productid };
  });

  try {
    const data = await prisma.cart.update({
      where: { id: cartId },
      data: { products: { connect: productObject } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong  ");
  }
};

export const removeItemFromCart = async (cartId: number, productId: number) => {
  try {
    const data = await prisma.cart.update({
      where: { id: cartId },
      data: { products: { disconnect: [{ id: productId }] } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
