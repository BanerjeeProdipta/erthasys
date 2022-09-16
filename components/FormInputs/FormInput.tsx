import { Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type PropTypes = {
  placeholder: string;
  icon: IconType;
  inputType?: string;
};

const FormInput = (props: PropTypes) => {
  const { placeholder, icon, inputType } = props;
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={inputType}
        border="none"
        focusBorderColor="brand.100"
        bg="offwhite.100"
      />
      <InputRightElement>
        <Icon as={icon} color="gray.100" />
      </InputRightElement>
    </InputGroup>
  );
};

FormInput.defaultProps = {
  inputType: 'text',
};

export default FormInput;
