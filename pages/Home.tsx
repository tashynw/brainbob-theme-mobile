import {
  Avatar,
  HStack,
  HamburgerIcon,
  Heading,
  Text,
  VStack,
  Spacer,
  ScrollView,
  Box,
  Center,
  SimpleGrid,
} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};

const Home = (props: Props) => {
  return (
    <VStack w="100%" alignItems="flex-start" space={8}>
      <HStack w="100%" alignItems="center">
        <HamburgerIcon size="lg" />
        <Spacer />
        <Avatar>TW</Avatar>
      </HStack>
      <VStack w="100%" alignItems="flex-start">
        <Heading size="2xl" fontWeight="md">
          Choose what
        </Heading>
        <Heading size="2xl" fontWeight="extrabold">
          to learn today?
        </Heading>
      </VStack>
      <ScrollView horizontal={true} w="100%">
        <HStack w="100%" space={4}>
          <Box borderRadius={60} bg="black" p={7} w="180px">
            <Center>
              <Heading size="md" fontWeight="bold" color="white">
                Brainstorm
              </Heading>
            </Center>
          </Box>
          <Box borderRadius={60} bg="gray.200" p={7} w="180px">
            <Center>
              <Heading size="md" fontWeight="bold" color="black">
                Books
              </Heading>
            </Center>
          </Box>
          <Box borderRadius={60} bg="gray.200" p={7} w="180px">
            <Center>
              <Heading size="md" fontWeight="bold">
                Video
              </Heading>
            </Center>
          </Box>
        </HStack>
      </ScrollView>
      <Box w="100%" borderRadius={40} p={8} bg="purple.800">
        <VStack w="100%" alignItems="flex-start" space={3}>
          <Heading size="xl" color="white" fontWeight="bold">
            Vocabulary
          </Heading>
          <Heading size="md" color="white" fontWeight="light">
            Listen 20 new words
          </Heading>
          <Box borderRadius={20} p={4} bg="white" mt={6}>
            <HStack w="30%" alignItems="center">
              <Heading size="sm" fontWeight="medium" fontSize="17px">
                Start
              </Heading>
              <Spacer />
              <Icon name="play-circle" size={22} color="black" />
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Heading size="lg" fontWeight="bold">
        Recommended
      </Heading>
      <SimpleGrid columns={1} space={5} w="95%">
        <Box borderRadius={20} bg="gray.200" p={6}>
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <HStack space={3} w="100%" alignItems="center">
              <Box borderRadius={20} p={4} bg="pink.300">
                <Center>
                  <Icon name="wechat" size={22} color="white" />
                </Center>
              </Box>
              <VStack alignItems="flex-start" space={1}>
                <Heading size="md" fontWeight="bold">
                  Chatting
                </Heading>
                <Heading size="sm" color="gray.600">
                  5 minutes
                </Heading>
              </VStack>
            </HStack>
            <Icon name="bookmark" size={22} color="gray" />
          </HStack>
        </Box>
        <Box borderRadius={20} bg="gray.200" p={6}>
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <HStack space={3} w="100%" alignItems="center">
              <Box borderRadius={20} p={4} bg="purple.800">
                <Center>
                  <Icon name="headphones" size={22} color="white" />
                </Center>
              </Box>
              <VStack alignItems="flex-start" space={1}>
                <Heading size="md" fontWeight="bold">
                  Listening
                </Heading>
                <Heading size="sm" color="gray.600">
                  2 minutes
                </Heading>
              </VStack>
            </HStack>
            <Icon name="bookmark" size={22} color="gray" />
          </HStack>
        </Box>
        <Box borderRadius={20} bg="gray.200" p={7}>
          <HStack w="100%" alignItems="center">
            <HStack space={3} w="100%" alignItems="center">
              <Box borderRadius={20} p={4} bg="orange.400" w="60px">
                <Center>
                  <Icon name="microphone" size={22} color="white" />
                </Center>
              </Box>
              <VStack alignItems="flex-start" space={1}>
                <Heading size="md" fontWeight="bold">
                  Speak
                </Heading>
                <Heading size="sm" color="gray.600">
                  3 minutes
                </Heading>
              </VStack>
            </HStack>
            <Icon name="bookmark" size={22} color="gray" />
          </HStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
