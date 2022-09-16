import { useState } from 'react';
import { Box, Flex, Menu, MenuButton, Button, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { RiCalendarLine, RiBarChartFill, RiLineChartFill } from 'react-icons/ri';
import Stats from './Stats';
import BarChart from './BarChart';
import TreeMapChart from './TreeMapChart';

const TreeMapBarCharts = () => {
  const [isBarChart, setIsBarChart] = useState(false);

  const toggleChart = () => setIsBarChart((prev) => !prev);

  return (
    <Box bg="white" borderRadius="10" p="5">
      <Flex justifyContent="space-between">
        <Menu>
          <MenuButton
            as={Button}
            background="blackAlpha.100"
            color="black"
            leftIcon={<RiCalendarLine />}
          >
            এই মাস
          </MenuButton>
          <MenuList>
            <MenuItem>এই মাস</MenuItem>
            <MenuItem>এই মাস</MenuItem>
          </MenuList>
        </Menu>
        <Button background="blackAlpha.100" onClick={toggleChart}>
          {
            <Icon
              as={isBarChart ? RiLineChartFill : RiBarChartFill}
              color="red.100"
              fontSize={20}
            />
          }
        </Button>
      </Flex>
      <Box mt={5} width="100%">
        <Flex direction={['column', 'row']}>
          <Box width={['80%', '20%']}>
            <Stats />
          </Box>
          <Box width={['100%', '80%']} pl={[0, 10]}>
            {isBarChart ? <BarChart /> : <TreeMapChart />}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TreeMapBarCharts;
