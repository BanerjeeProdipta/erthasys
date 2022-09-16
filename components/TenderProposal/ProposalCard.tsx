import { Box, HStack, Text } from '@chakra-ui/react';
import HeadingSection from './HeadingSection';

const ProposalCard = () => {
  return (
    <Box
      boxShadow=" 0px 0px 25px rgba(0, 0, 0, 0.05)"
      borderRadius="5"
      p="1"
      cursor="pointer"
      _hover={{ color: 'black', transform: 'scale(1.01)' }}
    >
      <Box bg="blackAlpha.100" borderRadius={10}>
        <HStack fontSize="10px">
          <HeadingSection label="Ref No" content="689703" />
          <HeadingSection label="Type" content="NCT, OTM" />

          <HeadingSection
            label="Status"
            content="Live"
            labelColor="brand.100"
            contentColor="red.100"
            borderRight={false}
          />
        </HStack>
      </Box>
      <Box padding="1" border="1px solid" borderColor="blackAlpha.300" borderRadius={10} mt="2">
        <Text fontSize="xs">
          Improvement of Durjanimahal Haiders house-Bashukhali road by BC at ch. 00-1800m, under
          upazila: Rupsha,Dist: Khulna. Salvage, Ministry of Local Government, Rural Development and
          Co-operatives, Local Government Division, Local Government Engineering Department (LGED),
          Office of the Executive Engineer, LGED, Khulna
        </Text>
      </Box>
      <Text textAlign="right" fontSize="xx-small" fontWeight="bold" mt="2">
        01 May 22 09:00 - 30 May 22 12:00
      </Text>
    </Box>
  );
};

export default ProposalCard;
