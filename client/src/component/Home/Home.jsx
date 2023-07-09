import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  CardHeader,
  Square, Spacer,
  ButtonGroup,
  FaTwitter,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // Check if the user is already logged in
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === " ") {
      alert("Please fill the field first");
    } else {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        alert("Invalid Username Or Password");

        console.log("Login failed");
      }
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <div>
      {token ? (
        <div>
          <Flex minWidth='max-content' alignItems='center' p={8}>
            <Box p='2'>
              <Text mt={10} fontSize={30}>Welcom to Home Page <b>{username}</b></Text>
            </Box>
            <Spacer />
            <ButtonGroup>
              <Button mt={4} colorScheme='telegram' onClick={handleLogout} >
                SignOut
              </Button>
            </ButtonGroup>
          </Flex>

          <SimpleGrid spacing={4} p={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'>Creativity</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'> TeamWork</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'>Core Strengths</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'>Adaptability</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'>Problem Solving</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
            <Card color={"White"} bg={"#4A55A2"}>
              <CardHeader>
                <Heading size='md'>Communication</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>More...</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
          {/* <Button mt={4} onClick={handleLogout}>
            Logout
          </Button> */}
        </div>
      ) : (
        <Flex align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} color={"grey"}>Sign in to your account</Heading>
            </Stack>
            <Card>
              <CardBody>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>UserName</FormLabel>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      onClick={handleLogin}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>

                  </Stack>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </Flex>

      )}


    </div>
  );
}

export default App;
