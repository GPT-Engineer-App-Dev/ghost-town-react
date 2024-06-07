import { Container, Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Login</Heading>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
        <Button onClick={() => navigate("/")} colorScheme="teal" variant="link">
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;