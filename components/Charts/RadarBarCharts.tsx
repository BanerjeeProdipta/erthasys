import { useState } from 'react';
import { Box, Flex, Button, Heading, Icon } from '@chakra-ui/react';
import { RiRadarFill, RiBarChartFill, RiCalendarFill } from 'react-icons/ri';
import BarChart from './BarChart';
import RadarChart from './RadarChart';

const series1 = [
  {
    name: 'ADB( Asian development bank)',
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: 'Government',
    data: [44, 76, 78, 13, 43, 10],
  },
];

const RadarBarCharts = () => {
  const [isBarChart, setIsBarChart] = useState(false);

  const toggleChart = () => setIsBarChart((prev) => !prev);

  return (
    <Box bg="white" borderRadius="10" p="5">
      <Flex justifyContent="space-between" bg="offwhite.100" p="2" mb={10} borderRadius={10}>
        <Flex alignItems="center">
          <Icon as={RiCalendarFill} fontSize="20" mr="2" />
          <Heading fontSize={['sm', 'md']} alignItems="center">
            আপনার ট্যাক্স এর টাকা যে খাতে ব্যয় হয়েছে
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Icon as={RiCalendarFill} fontSize="20" mr="2" />
          <Heading fontSize={['sm', 'md']} alignItems="center">
            সকল অর্থায়ন যে খাতে ব্যয় হয়েছে
          </Heading>
        </Flex>
        <Button background="blackAlpha.100" onClick={toggleChart}>
          {<Icon as={isBarChart ? RiRadarFill : RiBarChartFill} color="red.100" fontSize={20} />}
        </Button>
      </Flex>

      <Box mt={5} width="100%">
        {isBarChart ? (
          <BarChart />
        ) : (
          <Flex justifyContent="space-evenly" wrap={['wrap', 'nowrap']}>
            <Box w="100%">
              <RadarChart series={[series1[0]]} />
            </Box>
            <Box w="100%">
              <RadarChart series={series1} legend={true} />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default RadarBarCharts;
