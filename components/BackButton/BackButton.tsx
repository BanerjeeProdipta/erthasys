import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="link" leftIcon={<RiArrowGoBackLine color="black" />} onClick={handleBack} />
  );
};

export default BackButton;
