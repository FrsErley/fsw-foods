"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleFavoriteRestaurant = async (
  userId: string,
  restaurantId: string,
) => {
  const existingFavorite = await db.userFavoriteRestaurant.findFirst({
    where: {
      userId,
      restaurantId,
    },
  });

  if (existingFavorite) {
    await db.userFavoriteRestaurant.delete({
      where: { id: existingFavorite.id },
    });
  } else {
    await db.userFavoriteRestaurant.create({
      data: {
        user: { connect: { id: userId } },
        restaurant: { connect: { id: restaurantId } },
      },
    });
  }

  revalidatePath("/");
};
