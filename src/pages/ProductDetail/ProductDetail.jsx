import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/productService";
import ImageGallery from "react-image-gallery";
import { useCartContext } from "../../contexts/CartContext";

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart, cartItems, removeFromCart } = useCartContext();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const { isLoading, error, data } = useQuery(["product", productId], () =>
    fetchProductById(productId)
  );

  if (isLoading)
    return (
      <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red"
        />
      </Flex>
    );

  if (error) return "An error has occurred: " + error.message;

  const findCartItem = cartItems.find((item) => item.productId == productId);

  return (
    <div>
      {findCartItem ? (
        <Button colorScheme={"red"} onClick={() => removeFromCart(data)}>
          Remove From Cart
        </Button>
      ) : (
        <Button colorScheme={"green"} onClick={() => addToCart(data)}>
          Add To Cart
        </Button>
      )}

      <Text py={"0"} fontSize="3xl" fontWeight={"bold"} mt="15">
        {data.productName}
      </Text>
      <Text fontSize="xl" fontWeight={"semibold"}>
        {data.category.categoryName}
      </Text>
      <Text fontSize="xl" fontWeight={"semibold"}>
        Quantity Per Unit {data.quantityPerUnit}
      </Text>
      <Text fontSize="xl" fontWeight={"semibold"}>
        Unit Price {data.unitPrice}
      </Text>
      <Text fontSize="xl" fontWeight={"semibold"}>
        Units In Stock {data.unitsInStock}
      </Text>
      <Text my="5px">Created At {"28/09/2001"}</Text>
      <Box my="10" width="100%">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
