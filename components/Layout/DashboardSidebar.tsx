import Link from 'next/link';
import { Box, Button, Drawer, DrawerContent, DrawerBody, VStack, Icon } from '@chakra-ui/react';
import {
  RiLayout3Fill,
  RiFileList3Fill,
  RiMailFill,
  RiCalendar2Fill,
  RiUser3Fill,
  RiSettings2Fill,
} from 'react-icons/ri';
import { IconType } from 'react-icons';

type PropTypes = {
  onClose: () => void;
  isOpen: boolean;
};

type MenuLinkPropTypes = {
  label: string;
  link: string;
  icon: IconType;
};

const MenuLink = (props: MenuLinkPropTypes) => {
  const { icon, label, link } = props;

  return (
    <Button
      leftIcon={<Icon as={icon} fontSize="20" />}
      borderRightRadius={0}
      justifyContent="flex-start"
      py={6}
      _hover={{ color: 'black', backgroundColor: 'yellow.100' }}
      isFullWidth
    >
      <Link href={link} passHref>
        <Box as="a" _hover={{ color: 'black' }}>
          {label}
        </Box>
      </Link>
    </Button>
  );
};

const DashboardSidebar = ({ onClose, isOpen }: PropTypes) => {
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      blockScrollOnMount={false}
      closeOnOverlayClick
    >
      <DrawerContent
        mt={20}
        background="blackAlpha.100"
        boxShadow="5px 0px 25px rgba(0, 0, 0, 0.02)"
        backdropFilter="blur(50px)"
      >
        <DrawerBody paddingRight={0}>
          <VStack alignItems="flex-start" gap={8} mt={5}>
            <MenuLink label="ড্যাশবোর্ড" icon={RiLayout3Fill} link="/dashboard" />
            <MenuLink label="রিপোর্ট" icon={RiFileList3Fill} link="#!" />
            <MenuLink label="ইনবক্স" icon={RiMailFill} link="#!" />
            <MenuLink label="দিন পঞ্জিকা" icon={RiCalendar2Fill} link="#!" />
            <MenuLink label="ব্যবহারকারী" icon={RiUser3Fill} link="#!" />
            <MenuLink label="সেটিংস" icon={RiSettings2Fill} link="#!" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DashboardSidebar;
