import { Box, Button, Flex, Grid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { fetchProductsByPageNo } from "../../services/productService";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

function ProductList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["products"], fetchProductsByPageNo, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExits = lastGroup?.length === 12;
      if (!morePagesExits) return;
      return allGroups.length + 1;
    },
  });

  if (status === "loading") return <Loading />;

  if (status === "error") return "An error has occurred: " + error.message;
  return (
    <div>
      <Grid templateColumns={"repeat(4,1fr)"} gap="4">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box key={item.productId}>
                <Product item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt={"10"} justifyContent="center">
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
}

export default ProductList;
