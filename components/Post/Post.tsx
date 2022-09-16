import { Avatar, Box, Flex, HStack, Icon, IconButton, Text } from '@chakra-ui/react';
import { RiMore2Fill } from 'react-icons/ri';
import Tag from '../HashTags/Tag';
import PostFooter from './PostFooter';

const Post = () => {
  return (
    <Box bg="white" p={5} borderRadius={10}>
      <Box>
        <HStack justifyContent="space-between">
          <Flex>
            <Avatar name="Bangladesh" src="/images/govt-logo.png" bg="transparent" />
            <Box ml="3">
              <Text fontWeight="bold">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</Text>
              <Text color="blackAlpha.600" fontWeight="medium" fontSize="xs">
                19 December 2022 - 12:56 pm
              </Text>
            </Box>
          </Flex>
          <IconButton variant="link" aria-label="More">
            <Icon fontSize="xl" as={RiMore2Fill} />
          </IconButton>
        </HStack>

        <Text fontSize="sm" mt={5}>
          নির্মাণ কাজ সাইট তৈরির কাজ বিল্ডিং ভেঙ্গে ফেলা এবং ধ্বংস করার কাজ এবং মাটি সরানোর কাজ
          পরীক্ষা ড্রিলিং এবং বিরক্তিকর কাজ সম্পূর্ণ বা আংশিক নির্মাণ এবং সিভিল ইঞ্জিনিয়ারিং কাজের
          জন্য কাজ বিল্ডিং নির্মাণ কাজ ইঞ্জিনিয়ারিং কাজ এবং নির্মাণ কাজ পাইপলাইন, যোগাযোগ এবং
          নির্মাণ কাজ পাওয়ার লাইন, হাইওয়ে, রাস্তা, এয়ারফিল্ড এবং রেলওয়ের জন্য। ফ্ল্যাটওয়ার্ক
          পানি প্রকল্পের জন্য নির্মাণ কাজ প্ল্যান্টের জন্য নির্মাণ কাজ, খনি এবং উত্পাদন এবং তেল এবং
          গ্যাস শিল্প সম্পর্কিত ভবনগুলির জন্য। ছাদের কাজ এবং অন্যান্য বিশেষ বাণিজ্য নির্মাণ কাজ
          বিল্ডিং ইনস্টলেশন কাজ বৈদ্যুতিক ইনস্টলেশন কাজ ইনসুলেশন কাজ প্লাম্বিং এবং স্যানিটারি কাজ।
          বেড়া, রেলিং এবং নিরাপত্তা সরঞ্জাম ইনস্টলেশন কাজ যান্ত্রিক ইনস্টলেশন। ভবন সমাপ্তির কাজ।
          প্লাস্টারিং কাজ জোয়নারী এবং ছুতার স্থাপন কাজ মেঝে এবং দেয়াল আচ্ছাদন কাজ পেইন্টিং এবং
          গ্লাসিং কাজ অন্যান্য ভবন সমাপ্তির কাজ নির্মাণ এবং সিভিল ইঞ্জিনিয়ারিং যন্ত্রপাতি ভাড়া এবং
          অপারেটরের সাথে সরঞ্জাম। অপারেটরের সাথে ক্রেন ভাড়া অপারেটরের সাথে মাটি সরানোর সরঞ্জাম
          ভাড়া।
        </Text>

        <Flex gap="2" wrap="wrap" mt="5">
          {['কাজ', 'অপারেটর', 'গ্যাস', 'নতুন'].map((item, idx) => (
            <Tag key={`tag-${idx}`} name={item} />
          ))}
        </Flex>

        <PostFooter count={99} />
      </Box>
    </Box>
  );
};

export default Post;
