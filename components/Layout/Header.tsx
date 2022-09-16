import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Button,
  useDisclosure,
  useMediaQuery,
  HStack,
  Container,
} from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import { RiSearchFill } from 'react-icons/ri';
import MobileDrawer from './MobileDrawer';
import DashboardSidebar from './DashboardSidebar';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 991px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sidebar = useDisclosure();
  const router = useRouter();

  const isDashboard = useMemo(() => {
    const paths = ['/dashboard', '/proposal-details'];
    return paths.includes(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (mediaQuery !== isMobile) {
      setIsMobile(mediaQuery);
    }
    // eslint-disable-next-line
  }, [mediaQuery]);

  return (
    <Box py={4} bg="white" pos="fixed" width="100%" zIndex={10}>
      <Container maxW="container.xl">
        <Box>
          <Flex as="nav" justifyContent="space-between" alignItems="center">
            {isDashboard && (
              <Button variant="link" onClick={sidebar.onOpen}>
                <Box
                  as="span"
                  width="15px"
                  height="15px"
                  bg="red.100"
                  borderRadius="50%"
                  position="absolute"
                  top="2px"
                  right="3px"
                  border="2px solid #fff"
                />
                <IoMenu size="30" />
              </Button>
            )}
            <Box>
              <Link href="/">
                <a>
                  <Image src="/images/logo.png" alt="Shushashon" />
                </a>
              </Link>
            </Box>

            {!isMobile && (
              <HStack gap={10}>
                <InputGroup width="400px">
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

                <Avatar name="User" src="/images/user-avatar.png" />
                <Link href="/">
                  <a>
                    <Button background="red.100">লগ আউট করুন</Button>
                  </a>
                </Link>
              </HStack>
            )}
            {isMobile && (
              <Button variant="link" onClick={onOpen}>
                <IoMenu size="30" />
              </Button>
            )}
          </Flex>
          <MobileDrawer onClose={onClose} isOpen={isOpen} isDashboard={isDashboard} />
          <DashboardSidebar onClose={sidebar.onClose} isOpen={sidebar.isOpen} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
