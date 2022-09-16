import Image from 'next/image';
import { Box, Text, VStack, HStack, Heading, Icon } from '@chakra-ui/react';
import { IoLogoYoutube, IoLogoDiscord, IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box as="footer" mt={5} bg="white" borderRadius={10} p="5">
      <Box className="container">
        <VStack align="stretch" alignItems="flex-start" gap={5}>
          <Box mt="5">
            <Image src="/images/logo.png" alt="Shushashon" width="134px" height="38px" />
            <Text mt={3} fontWeight="medium" color="dark.100">
              শের-ই-বাংলা নগর, ঢাকা-১২০৭
            </Text>
          </Box>
          <Box>
            <Heading size="sm">আমাদের খুঁজে পাবেন</Heading>
            <Text mt="5" color="dark.100">
              সেন্ট্রাল প্রকিউরমেন্ট টেকনিক্যাল ইউনিট (সিপিটিইউ) বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন
              বিভাগ (আইএমইডি) পরিকল্পনা মন্ত্রণালয়
            </Text>
          </Box>
          <Box>
            <Heading size="sm">যেকোনো প্রয়োজনে </Heading>
            <Text mt="5" color="dark.100">
              ফোন: +৮৮০-২-৯১৪৪২৫২ <br /> ফ্যাক্স: +৮৮০-২-৯১৮০৯৬৮ <br /> ইমেইল: info@cptu.gov.bd,
              cptudg@cptu.gov.bd
            </Text>
          </Box>
          <Box>
            <VStack align="flex-start" gap="20px">
              <Heading size="sm">সামাজিক যোগাযোগ</Heading>
              <HStack fontSize={23} gap={10} color="dark.100">
                <a href="#!">
                  <Icon as={IoLogoYoutube} />
                </a>
                <a href="#!">
                  <Icon as={IoLogoDiscord} />
                </a>{' '}
                <a href="#!">
                  <Icon as={IoLogoInstagram} />
                </a>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;
