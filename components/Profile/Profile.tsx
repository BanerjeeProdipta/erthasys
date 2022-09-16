import { Avatar, Box, Divider, Flex, Heading, Icon, Image, Progress, Text } from '@chakra-ui/react';
import { RiAddCircleLine } from 'react-icons/ri';

const Profile = () => {
  return (
    <Box bg="white" borderRadius={10}>
      <Image src="/images/profile-bg.png" alt="Profile" />
      <Flex>
        <Avatar
          borderRadius={10}
          size="lg"
          name="User"
          src="/images/profile-image.jpg"
          mt="-5"
          ml="3"
        />
        <Box pl="5">
          <Heading size="md">Saad A Akash</Heading>
          <Text color="dark.100">Bangladeshi</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" w="100px" ml="auto" pr="2" pb="5">
        <Progress w="80%" value={90} size="xs" colorScheme="green" />
        <Text fontSize="xs" fontWeight="bold" ml="2">
          90%
        </Text>
      </Flex>
      <Divider />
      <a href="#!">
        <Flex p="5">
          <Icon as={RiAddCircleLine} color="dark.100" fontSize="3xl" />
          <Text fontSize="xl" color="dark.100" ml="2">
            Add another account
          </Text>
        </Flex>
      </a>
    </Box>
  );
};

export default Profile;
