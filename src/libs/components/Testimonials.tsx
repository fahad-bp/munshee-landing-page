import {
  Avatar,
  Card,
  Grid,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Card
      w={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      <Text
        fontSize={60}
        fontWeight={400}
        fontFamily={"roboto-slab"}
        textAlign={"center"}
      >
        Testimonials
      </Text>
      <Text
        textAlign={"center"}
        fontSize={20}
        fontFamily={"Poppins"}
        fontWeight={400}
        w={"500px"}
        mt={4}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit.
      </Text>

      <SimpleGrid w="full" spacing={7} columns={2} px={250} mt={10}>
        {[1, 1, 1, 1].map(() => (
          <Card w={"100%"} h={"200px"} bgColor={"#2c3b46"} borderRadius={15}>
            <Text w={"100%"} fontSize={20} fontFamily={"Poppins"} px={5} py={3}>
              Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu
              elit sed odio. Blandit. Lorem ipsum dolor sit amet consectetur.
              Imperdiet laoreet odio eu elit sed odio. Blandit. Lorem ipsum
              dolor sit amet consectetur.{" "}
            </Text>
            <HStack>
              <Avatar
                size="lg"
                name="Kola Tioluwani"
                src="https://bit.ly/code-beast"
                ml={4}
                mt={1}
              />
              <VStack spacing={0}>
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={20}>
                  Najam Memon
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={15}
                  mr={"60px"}
                  px={1}
                >
                  Demo Card
                </Text>
              </VStack>
            </HStack>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default Testimonials;