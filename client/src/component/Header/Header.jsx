import { Box, useColorModeValue, Text, Card, Divider } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Card borderRadius={0} >
        <Text p={5} textAlign={"center"} fontSize={"2xl"} fontWeight={'500'} color={"#27374D"}>
          T-MACHINE SOFTWARE SOLUTION PVT.LTD
        </Text>
      </Card>
    </>
  );
}
