import Link from 'next/link';
import {
  Avatar,
  Image,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { RiSearchFill } from 'react-icons/ri';

type PropTypes = {
  onClose: () => void;
  isOpen: boolean;
  isDashboard: boolean;
};

const MobileDrawer = ({ onClose, isOpen, isDashboard }: PropTypes) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} closeOnOverlayClick>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton fontSize={16} />
        <DrawerHeader borderBottomWidth="1px">
          <Image src="/images/logo.png" alt="SuperNova" />
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems="flex-start" gap={8} mt={5}>
            <InputGroup width="220px">
              <InputRightElement pointerEvents="none">
                <Icon as={RiSearchFill} color="dark.100" fontWeight="bold" />
              </InputRightElement>
              <Input
                type="search"
                placeholder="এখানে সার্চ করুন"
                background="offwhite.100"
                borderRadius="10"
                border="none"
              />
            </InputGroup>
            <Link href="#!">
              <a>
                <Button variant="link">আমাদের সেবা সমুহ</Button>
              </a>
            </Link>
            <Link href="#!">
              <a>
                <Button variant="link">আমাদের সম্পর্কে জানুন</Button>
              </a>
            </Link>
            <Link href="#!">
              <a>
                <Button variant="link">প্রায়শ জিজ্ঞাসিত প্রশ্ন</Button>
              </a>
            </Link>
            {isDashboard ? (
              <>
                <Avatar name="User" src="/images/user-avatar.png" />
                <Link href="/">
                  <a>
                    <Button background="red.100">লগ আউট করুন</Button>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <a>
                    <Button background="red.100">একাউন্ট তৈরি করুন</Button>
                  </a>
                </Link>
                <Link href="/login">
                  <a>
                    <Button>লগিন করুন</Button>
                  </a>
                </Link>
              </>
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
