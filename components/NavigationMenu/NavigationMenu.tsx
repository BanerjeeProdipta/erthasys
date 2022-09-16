import { Box, Button, VStack, Icon, Badge, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  RiHome3Fill,
  RiFileList3Fill,
  RiCalendarFill,
  RiFileDownloadFill,
  RiBookmark3Fill,
  RiFileEditFill,
  RiSettings4Fill,
  RiUser3Fill,
} from 'react-icons/ri';

const navItems = [
  { id: 1, title: 'হোম পেইজ', icon: RiHome3Fill, link: '/' },
  { id: 2, title: 'সকল প্রক্রিউরমেন্ট', icon: RiFileList3Fill, link: '/procurements' },
  { id: 3, title: 'দিন পঞ্জিকা', icon: RiCalendarFill, link: '/calendar' },
  { id: 4, title: 'ক্রয় পর্যবেক্ষণ', icon: RiFileEditFill, link: '/monitoring' },
  { id: 5, title: 'ডাটা ডাউনলোড', icon: RiFileDownloadFill, link: '#!', isNew: true },
  { id: 6, title: 'প্রকাশনা', icon: RiBookmark3Fill, link: '#!' },
  { id: 7, title: 'প্রোফাইল', icon: RiUser3Fill, link: '#!' },
  { id: 8, title: 'সেটিংস', icon: RiSettings4Fill, link: '#!' },
];

const NavigationMenu = () => {
  const router = useRouter();

  return (
    <Box bg="white" borderRadius={10} mt="5" p="5">
      <VStack align="stretch" alignItems="flex-start" gap={5}>
        {navItems.map((item) => (
          <Flex key={item.id} alignItems="center">
            <Link href={item.link} passHref>
              <Button
                key={item.id}
                variant="link"
                leftIcon={<Icon fontSize="2xl" as={item.icon} />}
                iconSpacing="5"
                isActive={item.link === router.pathname}
              >
                {item.title}
              </Button>
            </Link>
            {item?.isNew && (
              <Badge bg="brand.100" color="white" ml="10" borderRadius={10} px="2">
                New
              </Badge>
            )}
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default NavigationMenu;
