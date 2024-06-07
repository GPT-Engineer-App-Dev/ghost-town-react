import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your React App</Heading>
        <Text fontSize="xl">This is your starting point. Customize it as you like!</Text>
        <Box mt={6}>
          <Button rightIcon={<FaRocket />} colorScheme="teal" variant="solid" size="lg">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;