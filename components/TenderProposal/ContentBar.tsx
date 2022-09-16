import { Box, HStack } from '@chakra-ui/react';
import HeadingSection, { SectionType } from './HeadingSection';

type PropTypes = {
  data: SectionType[];
};

export const ContentBar = ({ data }: PropTypes) => {
  return (
    <Box bg="blackAlpha.100" borderRadius={10} mt="5">
      <HStack fontSize="10px" wrap="wrap" gap={1}>
        {data.map((item, idx) => (
          <HeadingSection key={idx} {...item} />
        ))}
      </HStack>
    </Box>
  );
};

export default ContentBar;
