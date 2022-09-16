import type { NextPage } from 'next';
import { Box, Container, Flex } from '@chakra-ui/react';
import Title from '../../components/Title/Title';
import Profile from '../../components/Profile/Profile';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Layout/Footer';
import Calendar from '../../components/Calendar/Calendar';

const CalendarPage: NextPage = () => {
  return (
    <>
      <Title title="Calendar" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" flexDirection={['column-reverse', 'row']}>
          <Box flex={1} w="100%">
            <Profile />
            <NavigationMenu />
            <Footer />
          </Box>
          <Box flex={[1, 3]}>
            <Calendar />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CalendarPage;
