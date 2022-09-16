import type { NextPage } from 'next';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Title from '../../components/Title/Title';
import Profile from '../../components/Profile/Profile';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Layout/Footer';
import HashTags from '../../components/HashTags/HashTags';
import RadarBarCharts from '../../components/Charts/RadarBarCharts';
import ContentBar from '../../components/TenderProposal/ContentBar';
import Timeline from '../../components/Timeline/Timeline';

const data = [
  {
    label: 'Proposal Id',
    content: '689703',
  },
  {
    label: 'Type',
    content: 'NCT, OTM',
  },
  {
    label: 'Procurement Nature',
    content: 'Works',
  },
  {
    label: 'Event Type ',
    content: 'TENDER',
  },
  {
    label: 'App ID',
    content: '177066',
  },
  {
    label: 'Invitation for',
    content: 'Tender - Single Lot',
    borderRight: false,
  },
];

const ProposalDetails: NextPage = () => {
  return (
    <>
      <Title title="Announcement" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" direction={['column-reverse', 'row']}>
          <Box flex="1">
            <Profile />
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3">
            <RadarBarCharts />
            <Box bg="white" borderRadius="10" px={[0, 5]} py={10} mt={5}>
              <Heading size="sm">View IFT /PQ / REOI / RFP Notice Details</Heading>
              <ContentBar data={data} />
              <Timeline />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ProposalDetails;
