import type { NextPage } from 'next';
import { Box, Container, Flex } from '@chakra-ui/react';
import Title from '../../components/Title/Title';
import Profile from '../../components/Profile/Profile';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Layout/Footer';
import TopologyChart from '../../components/Charts/TopologyMap';

const Monitoring: NextPage = () => {
  return (
    <>
      <Title title="Monitoring" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" direction={['column-reverse', 'row']}>
          <Box flex="1">
            <Profile />
            <NavigationMenu />
            <Footer />
          </Box>
          <Box flex="3">
            <TopologyChart />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Monitoring;
