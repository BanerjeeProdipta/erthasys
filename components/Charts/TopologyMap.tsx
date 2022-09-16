import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import Highcharts from 'highcharts/highmaps';
import type { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RiCalendarFill } from 'react-icons/ri';

import topology from '../../data/bd-topology';

const data = [
  ['bd-da', 50],
  ['bd-kh', 11],
  ['bd-ba', 20],
  ['bd-cg', 30],
  ['bd-sy', 20],
  ['bd-rj', 36],
  ['bd-rp', 16],
];

const options: Options = {
  chart: {
    map: topology,
    height: 700,
  },
  legend: { align: 'left' },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  colorAxis: {
    min: 1,
    max: 70,
    minColor: '#FC8D59',
    maxColor: '#90CF60',
  },
  series: [
    {
      // @ts-ignore
      data: data,
      name: 'গড় সংখ্যা',
      states: {
        hover: {
          color: '#D9EF8B',
        },
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
    },
  ],
};

const TopologyChart = () => (
  <Box borderRadius={10} overflow="hidden" bg="white" p="5">
    <Flex alignItems="center" bg="offwhite.100" p="1" borderRadius={10} mb={10}>
      <Icon as={RiCalendarFill} fontSize="20" mr="2" />
      <Heading size="md" alignItems="center">
        এখানে ক্রয় পর্যবেক্ষণ করুন
      </Heading>
    </Flex>

    <HighchartsReact constructorType="mapChart" highcharts={Highcharts} options={options} />
  </Box>
);
export default TopologyChart;
