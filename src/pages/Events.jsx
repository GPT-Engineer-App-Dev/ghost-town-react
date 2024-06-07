import { Container, Heading, Text } from "@chakra-ui/react";

const Events = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl" mb={4}>Events</Heading>
      <Text fontSize="xl">This is the protected events page.</Text>
    </Container>
  );
};

export default Events;