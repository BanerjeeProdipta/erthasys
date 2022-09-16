import { Box, Text } from '@chakra-ui/react';

export type SectionType = {
  label: string;
  content: string;
  borderRight?: boolean;
  labelColor?: string;
  contentColor?: string;
};

const HeadingSection = (props: SectionType) => {
  const { label, content, borderRight, labelColor, contentColor } = props;

  return (
    <Text borderRight={borderRight ? '1px solid white' : 'none'} p="1" color={contentColor}>
      <Box as="span" fontWeight="bold" mr="1" color={labelColor}>
        {label}
      </Box>
      {content}
    </Text>
  );
};

HeadingSection.defaultProps = {
  borderRight: true,
  labelColor: 'black',
  contentColor: 'black',
};

export default HeadingSection;
