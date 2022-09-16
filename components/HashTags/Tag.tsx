import { Box, Badge } from '@chakra-ui/react';

type PropTypes = {
  name: string;
};

const Tag = ({ name }: PropTypes) => {
  return (
    <Box as="a" href="#!">
      <Badge
        variant="subtle"
        bg="gray.100"
        color="dark.100"
        px={3}
        py={1}
        borderRadius={5}
        _hover={{ color: 'dark.900' }}
      >
        #{name}
      </Badge>
    </Box>
  );
};

export default Tag;
