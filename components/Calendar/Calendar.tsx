import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { parse, format } from 'date-fns';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { bn } from 'date-fns/locale';
import { Box, Heading, Icon, Flex } from '@chakra-ui/react';
import { RiCalendarFill } from 'react-icons/ri';

const events = [
  {
    start: parse('12-05-2022', 'dd-MM-yyyy', new Date()),
    end: parse('15-05-2022', 'dd-MM-yyyy', new Date()),
    title:
      'Installation of 17(Seventeen) nos shallow Tube Well With 6 no.Hand Pump at Gangni upazila of Meherpur Dist.',
  },
  {
    start: parse('15-05-2022', 'dd-MM-yyyy', new Date()),
    end: parse('22-05-2022', 'dd-MM-yyyy', new Date()),
    title:
      'Installation of 17(Seventeen) nos shallow Tube Well With 6 no.Hand Pump at Gangni upazila of Meherpur Dist.',
  },
  {
    start: parse('22-05-2022', 'dd-MM-yyyy', new Date()),
    end: parse('29-05-2022', 'dd-MM-yyyy', new Date()),
    title:
      'Installation of 17(Seventeen) nos shallow Tube Well With 6 no.Hand Pump at Gangni upazila of Meherpur Dist.',
  },
];

const locales = {
  bn,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Calendar = () => (
  <Box bg="white" borderRadius={10} p="5">
    <Flex alignItems="center" bg="offwhite.100" p="2" borderRadius={10} mb={10}>
      <Icon as={RiCalendarFill} fontSize="20" mr="2" />
      <Heading size="md" alignItems="center">
        আপনার ইভেন্ট গুলো এখানে দেখতে পারবেন
      </Heading>
    </Flex>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </Box>
);

export default Calendar;
