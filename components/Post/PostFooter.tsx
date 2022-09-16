import {
  Box,
  Button,
  Flex,
  Text,
  HStack,
  Image,
  Icon,
  Badge,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { RiThumbUpLine, RiMessage3Line, RiSendPlaneLine, RiBookmark2Line } from 'react-icons/ri';
import CommentForm from './CommentForm';

type PropTypes = {
  count: string | number;
};

const PostFooter = ({ count }: PropTypes) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex justifyContent="space-between" mt={10}>
        <HStack gap="5">
          <Box position="relative">
            <Button variant="link">
              <Icon fontSize="2xl" as={RiThumbUpLine} />
            </Button>
            <Box
              position="absolute"
              border="1px solid"
              borderColor="white.200"
              borderRadius="10"
              top="-17px"
              right="-50px"
              zIndex={2}
              px="2px"
              bg="brand.100"
              color="white"
            >
              <HStack>
                <Image src="/images/reaction-icon.png" alt="Icon" width="30px" />
                <Text fontSize="small">+{count}</Text>
              </HStack>
            </Box>
          </Box>
          <Button variant="link">
            <Icon fontSize="2xl" as={RiMessage3Line} />
            <Badge
              pos="absolute"
              top="-10px"
              right="-5px"
              rounded="full"
              w="25px"
              bg="brand.100"
              color="white"
              fontSize="small"
              border="1px solid white"
            >
              8
            </Badge>
          </Button>
          <Button variant="link" onClick={onToggle}>
            <Icon fontSize="2xl" as={RiSendPlaneLine} />
          </Button>
        </HStack>
        <Button variant="link">
          <Icon fontSize="2xl" as={RiBookmark2Line} />
        </Button>
      </Flex>

      <Collapse in={isOpen}>
        <CommentForm />
      </Collapse>
    </Box>
  );
};

export default PostFooter;
