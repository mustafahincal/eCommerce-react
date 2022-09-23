import { Box, Button, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { productId } = useParams();
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
    getProductById(productId)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      <Button colorScheme={"blue"}> Add To Cart</Button>

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
