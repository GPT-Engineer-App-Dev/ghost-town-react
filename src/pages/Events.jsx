import { Container, Heading, Text, VStack, Box, Spinner } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="xl" color="red.500">Failed to load events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl" mb={4}>Events</Heading>
      <VStack spacing={4} width="100%">
        {events.length === 0 ? (
          <Text fontSize="xl">No events available.</Text>
        ) : (
          events.map(event => (
            <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Heading as="h2" size="md">{event.name}</Heading>
              <Text>Date: {new Date(event.date).toLocaleDateString()}</Text>
              <Text>Venue ID: {event.venue_id}</Text>
              <Text>Starred: {event.is_starred ? "Yes" : "No"}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;