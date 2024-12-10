import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

interface UserFavoriteRestaurant {
  userFavoriteRestaurants: {
    id: string;
    userId: string;
    restaurantId: string;
    createdAt: Date;
    restaurant: {
      id: string;
    };
  }[];
}

const RestaurantList = async ({
  userFavoriteRestaurants,
}: UserFavoriteRestaurant) => {
  const restaurants = await db.restaurant.findMany({
    take: 10,
  });
  return (
    <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          userFavoriteRestaurants={userFavoriteRestaurants}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
