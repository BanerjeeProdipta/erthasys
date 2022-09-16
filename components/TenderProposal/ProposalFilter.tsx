import { Box, Button, Heading, Icon, VStack } from '@chakra-ui/react';
import { RiArrowLeftSFill, RiSearchFill, RiArrowDownSFill, RiCalendar2Fill } from 'react-icons/ri';
import FormInput from '../FormInputs/FormInput';

const ProposalFilter = () => {
  return (
    <Box>
      <VStack gap={5}>
        <Box p="3" borderRadius={5} background="offwhite.100" color="black" w="100%">
          <Box pos="relative" textAlign="center">
            <Icon as={RiArrowLeftSFill} pos="absolute" left={5} />
            <Heading size="sm">এডভান্স সার্চ</Heading>
          </Box>
        </Box>
        <FormInput placeholder="মিনিস্ট্রি / ডিভিশন" icon={RiSearchFill} />
        <FormInput placeholder="প্রোকিউরিং এন্টিটি" icon={RiArrowDownSFill} />
        <FormInput placeholder="প্রোকিউরিং এর প্রকৃতি" icon={RiArrowDownSFill} />
        <FormInput placeholder="ফ্রম পাব্লিশিং ডেট" icon={RiCalendar2Fill} />
        <FormInput placeholder="টু পাব্লিশিং ডেট" icon={RiCalendar2Fill} />
        <FormInput placeholder="ফ্রম ক্লোজিং ডেট" icon={RiCalendar2Fill} />
        <FormInput placeholder="টু ক্লোজিং ডেট" icon={RiCalendar2Fill} />
        <FormInput placeholder="রেফারেন্স আইডি" icon={RiSearchFill} />
        <FormInput placeholder="ক্যাটাগরি বাছাই করুণ" icon={RiArrowDownSFill} />
        <FormInput placeholder="প্রোকিউরমেন্ট মেথড" icon={RiArrowDownSFill} />
        <Button background="red.100" isFullWidth>
          সার্চ করুন
        </Button>
      </VStack>
    </Box>
  );
};

export default ProposalFilter;
