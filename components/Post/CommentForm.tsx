import {
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Avatar,
  Input,
  InputRightElement,
  Icon,
  ButtonGroup,
} from '@chakra-ui/react';
import { RiMicLine, RiImage2Line } from 'react-icons/ri';

const CommentForm = () => {
  return (
    <Box mt="5" p="1">
      <InputGroup>
        <InputLeftElement>
          <Avatar name="Admin" src="/images/user-avatar.png" size="sm" />
        </InputLeftElement>
        <Input placeholder="Write a comment" focusBorderColor="brand.100" borderRadius={20} />
        <InputRightElement pr="10">
          <ButtonGroup spacing={0} cursor="pointer">
            <Button variant="link">
              <Icon as={RiMicLine} />
            </Button>
            <Button variant="link" ml="0">
              <Icon as={RiImage2Line} />
            </Button>
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default CommentForm;
