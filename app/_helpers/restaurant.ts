import { UserFavoriteRestaurant } from "@prisma/client";

export const isRestaurantFavorited = (
  userFavoriteRestaurants: UserFavoriteRestaurant[],
  restaurantId: string,
) => {
  return userFavoriteRestaurants?.some(
    (fav) => fav.restaurantId === restaurantId,
  );
};
