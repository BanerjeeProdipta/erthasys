import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Tag from './Tag';

const tags = [
  { id: 1, name: 'work' },
  { id: 2, name: 'business' },
  { id: 3, name: 'hr' },
  { id: 4, name: 'tender' },
  { id: 5, name: 'proposal' },
  { id: 6, name: 'procurement' },
  { id: 7, name: 'latest' },
];

const HashTags = () => {
  return (
    <Box bg="white" mt={5} p={5}>
      <Heading size="md" pb="2">
        হ্যাশট্যাগ দিয়ে খুঁজুন
      </Heading>
      <Divider />
      <Flex gap={2} wrap="wrap" mt="3">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </Flex>
    </Box>
  );
};

export default HashTags;
