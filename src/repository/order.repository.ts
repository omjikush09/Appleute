import prisma from "../utils/prisma";
import { getCartById } from "./cart.repository";

export const createOrder = async (cartId: number) => {
  const cart = await getCartById(cartId);
  if (cart?.products.length === 0) {
    return null;
  }
  const products = cart?.products.map((product: any) => {
    return { id: product.id };
  });

  try {
    const data = await prisma.order.create({
      data: {
        products: { connect: products },
        user: { connect: { id: cart?.userId } },
      },
    });
    await prisma.cart.update({
      where: { id: cartId },
      data: { products: { disconnect: products } },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};

export const getOrderById = async (id: number) => {
  try {
    const data = await prisma.order.findUnique({
      where: { id },
      include: { products: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
export const getOrdersByUserId = async (userId: number) => {
  try {
    const data = await prisma.order.findMany({
      where: { userId },
      include: { products: true },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong ");
  }
};
