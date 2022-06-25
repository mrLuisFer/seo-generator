import { Input, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { BsUpload } from 'react-icons/bs';
import { useState } from 'react';

export default function MetaImg() {
  const [hover, setHover] = useState<boolean>(false);

  const handleSubmitImg = (e) => {
    console.log(e.target.files[0]);
  }

  return (
    <FormControl mb="1rem">
      <FormLabel
        borderRadius="8px"
        backgroundSize="cover"
        backgroundPosition="center"
        htmlFor="metaImg"
        height="210px"
        backgroundImage="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        cursor="pointer"
        alignItems="center"
        border="1px solid"
        borderColor="transparent"
        color="gray.900"
        backgroundRepeat="no-repeat"
        _hover={{ borderColor: 'fill.300', backdropFilter: 'blur(10px)' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Text
          p="0.8rem"
          borderRadius="50%"
          color="fill.300"
          border="1.5px solid"
          transition="0.2s ease"
          transform={hover ? 'scale(1.1)' : 'scale(1)'}
          background={hover ? 'rgba(42, 129, 251, 0.3)' : 'transparent'}
          borderColor={hover ? 'fill.300' : 'border.100'}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <BsUpload size="2rem" />
        </Text>
        <Text fontSize="0.8rem" opacity={hover ? "1" : "0.8"} mt="0.5rem" textTransform="uppercase" fontWeight="semibold">
          drag & drop or click
        </Text>
      </FormLabel>
      <Input type="file" id="metaImg" name="metaImg" display="none" onChange={(e) => handleSubmitImg(e)} />
    </FormControl>
  );
}
