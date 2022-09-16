import { Stat, StatNumber, StatHelpText, StatArrow, Checkbox, Box } from '@chakra-ui/react';

const Stats = () => {
  return (
    <Box>
      <Stat>
        <StatNumber fontSize={30}>15,000 টি</StatNumber>
        <StatHelpText>
          মোট টেন্ডার
          <StatArrow type="increase" ml="3" />
          2.36%
        </StatHelpText>
      </Stat>
      <Checkbox colorScheme="green" defaultChecked>
        অন ট্র্যাক
      </Checkbox>
    </Box>
  );
};

export default Stats;
