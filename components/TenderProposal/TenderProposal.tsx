import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Icon,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiSearchFill } from 'react-icons/ri';
import BackButton from '../BackButton/BackButton';
import Pagination from './Pagination';
import ProposalCard from './ProposalCard';
import ProposalFilter from './ProposalFilter';

const TenderProposal = () => {
  return (
    <Box bg="white" borderRadius="5" px={5} py={10} mt={10}>
      <Flex justifyContent="space-between">
        <Heading size="md">
          <BackButton /> ই টেন্ডার প্রোপোজাল
        </Heading>
        <InputGroup w="300px">
          <InputRightElement pointerEvents="none">
            <Icon as={RiSearchFill} color="dark.100" fontWeight="bold" />
          </InputRightElement>
          <Input
            type="search"
            placeholder="কিওয়ার্ড লিখে সার্চ করুন"
            background="offwhite.100"
            borderRadius="10"
            border="none"
          />
        </InputGroup>
      </Flex>
      <Flex justifyContent="space-between" flexDir={['column', 'row']} mt={5}>
        <Box
          bg="white"
          w={['100%', '22%']}
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
          borderRadius={5}
          p="2"
        >
          <ProposalFilter />
        </Box>
        <Box
          bg="white"
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
          borderRadius={5}
          w={['100%', '76%']}
          mt={[5, 0]}
          p="3"
        >
          <SimpleGrid columns={[1, 3]} gap={2}>
            {Array.from(Array(12).keys()).map((i) => (
              <Link href="/proposal-details" key={i}>
                <a>
                  <ProposalCard />
                </a>
              </Link>
            ))}
          </SimpleGrid>
          <Box py="10">
            <Flex justifyContent={['center', 'flex-end']}>
              <Pagination />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default TenderProposal;
