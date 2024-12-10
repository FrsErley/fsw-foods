import { toast } from "sonner";
import { toggleFavoriteRestaurant } from "../_components/_actions/favorite-restaurant";
import { UserFavoriteRestaurant } from "@prisma/client";
import { useRouter } from "next/navigation";

interface useToggleFavoriteRestaurantProps {
  userId?: string;
  userFavoriteRestaurants?: UserFavoriteRestaurant[];
  restaurantId: string;
  restaurantIsFavorited?: boolean;
}

const useToggleFavoriteRestaurant = ({
  userId,
  restaurantId,
  restaurantIsFavorited,
}: useToggleFavoriteRestaurantProps) => {
  const router = useRouter();
  const handleFavoriteClick = async () => {
    if (!userId) return;
    try {
      await toggleFavoriteRestaurant(userId, restaurantId);

      toast.success(
        restaurantIsFavorited
          ? "Restaurante removido dos favoritos."
          : "Restaurante favoritado.",

        {
          action: {
            label: "Ver favoritos",
            onClick: () => router.push("/my-favorite-restaurants"),
          },
        },
      );
    } catch (error) {
      toast.error("Erro ao favoritar restaurante.");
    }
  };
  return { handleFavoriteClick };
};

export default useToggleFavoriteRestaurant;
