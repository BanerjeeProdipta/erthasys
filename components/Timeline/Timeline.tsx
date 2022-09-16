import { useMemo, useState } from 'react';
import { Avatar, Box, Text, Icon, HStack, Badge, Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { RiTimeLine, RiCheckDoubleLine, RiErrorWarningLine } from 'react-icons/ri';
import QRCode from 'react-qr-code';
import timelineData from './timelineData';

type ContentWrapperPropTypes = {
  children: React.ReactNode;
};

type ContentPropTypes = {
  text: string;
  timeStamp: string;
  reverse: boolean;
  status: string;
};

type CustomBadgePropTypes = {
  icon: IconType;
  text: string;
  color: 'red' | 'yellow' | 'green';
};

const ContentWrapper = ({ children }: ContentWrapperPropTypes) => (
  <Box
    pos="relative"
    _after={{
      content: '""',
      position: 'absolute',
      width: '2px',
      backgroundColor: 'gray.100',
      top: 0,
      bottom: 0,
      left: '50%',
    }}
  >
    {children}
  </Box>
);

const CustomBadge = ({ icon, text, color }: CustomBadgePropTypes) => (
  <Badge variant="outline" colorScheme={color} pt={1}>
    <Icon as={icon} /> {text}
  </Badge>
);

const Content = (props: ContentPropTypes) => {
  const { text, timeStamp, status, reverse = false } = props;
  const [circleColor, setCircleColor] = useState('brand.100');

  const getBadge = useMemo(() => {
    switch (status) {
      case 'pending':
        setCircleColor('red.100');
        return (
          <CustomBadge icon={RiErrorWarningLine} text="নিরীক্ষক কর্তৃক যাচাই প্রয়োজন" color="red" />
        );
      case 'in-progress':
        setCircleColor('yellow.100');
        return <CustomBadge icon={RiTimeLine} text="নিরীক্ষক কর্তৃক যাচাই চলমান" color="yellow" />;

      case 'verified':
        setCircleColor('brand.100');
        return (
          <CustomBadge icon={RiCheckDoubleLine} text="নিরীক্ষক কর্তৃক যাচাইকৃত" color="green" />
        );
    }
  }, [status]);

  return (
    <>
      <Box
        p="10px 30px"
        pos="relative"
        w="50%"
        textAlign="right"
        left={0}
        _after={{
          content: '""',
          position: 'absolute',
          width: ['20px', '30px'],
          height: ['20px', '30px'],
          right: ['-10px', '-15px'],
          backgroundColor: circleColor,
          zIndex: 2,
          borderRadius: '50%',
          top: '20px',
        }}
      >
        {reverse ? (
          <HStack padding="10px" bg="offwhite.100" borderRadius={5}>
            <Box>
              {status === 'verified' && <Box as={QRCode} value="http://localhost:3000" size={70} />}
              {status !== 'pending' && (
                <a href="http://localhost:3000" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="xs" mt="2" mr="3">
                    View
                  </Button>
                </a>
              )}
            </Box>

            <Box>
              <Text fontSize="md">{text}</Text>
              <Text fontSize="xs" color="red.100">
                <b>সময়:</b> {timeStamp}
              </Text>
              <Box>{getBadge}</Box>
            </Box>
          </HStack>
        ) : (
          <Avatar name="User" src="/images/tubewell.png" />
        )}
      </Box>

      <Box padding={['10px 15px', '10px 30px']} pos="relative" w="50%" top="-6rem" left="50%">
        {reverse ? (
          <Avatar name="User" src="/images/tubewell.png" top={['-8rem', '-2rem']} />
        ) : (
          <HStack padding="20px" bg="offwhite.100" borderRadius={5}>
            <Box>
              <Text fontSize="md">{text}</Text>
              <Text fontSize="xs" color="red.100">
                <b>সময়:</b> {timeStamp}
              </Text>
              <Box>{getBadge}</Box>
            </Box>

            <Box>
              {status === 'verified' && (
                <Box>
                  <Box as={QRCode} value="http://localhost:3000" size={70} />
                </Box>
              )}
              {status !== 'pending' && (
                <a href="http://localhost:3000" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="xs" ml="3" mt="2">
                    View
                  </Button>
                </a>
              )}
            </Box>
          </HStack>
        )}
      </Box>
    </>
  );
};

Content.defaultProps = {
  reverse: false,
};

const Timeline = () => {
  const isOdd = (value: number) => {
    return value % 2 == 0;
  };

  return (
    <Box pt="10">
      {timelineData.map((item, idx) => (
        <ContentWrapper key={item.id}>
          <Content
            text={item.text}
            reverse={!isOdd(idx)}
            timeStamp={item.timeStamp}
            status={item.status}
          />
        </ContentWrapper>
      ))}
    </Box>
  );
};

export default Timeline;
