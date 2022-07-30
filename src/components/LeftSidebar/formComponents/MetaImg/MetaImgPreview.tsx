import { Input, FormControl, FormLabel, Text, Button } from '@chakra-ui/react';
import { BsUpload } from 'react-icons/bs';
import { IoReload } from 'react-icons/io5';
import { FormEvent, useState } from 'react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { MdClose } from 'react-icons/md';

const baseBgImgUrl =
  'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

export default function MetaImgPreview() {
  const [hover, setHover] = useState<boolean>(false);
  const { setImgUrl, imgUrl } = useGetInputStates();

  const handleOnChange = (changeEvent: any) => {
    const file = changeEvent.target.files[0];
    if (!file) return null;
    const reader = new FileReader();
    reader.onload = (onLoadEvent: any) => {
      const imgResult = onLoadEvent.target.result;
      setImgUrl(imgResult);
    };
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleCleanImgSrc = () => {
    setImgUrl('');
  };

  return (
    <FormControl
      className={imgUrl && 'metaImg'}
      mb="1rem"
      position="relative"
      borderRadius="8px"
      maxWidth="500px"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FormLabel
        borderRadius="8px"
        backgroundSize="cover"
        backgroundPosition="center"
        htmlFor="metaImg"
        height="210px"
        backgroundImage={imgUrl || baseBgImgUrl}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        cursor="default"
        alignItems="center"
        border="1px solid"
        borderColor={hover ? 'fill.300' : 'transparent'}
        color="gray.900"
        backgroundRepeat="no-repeat"
        m="0"
      >
        {imgUrl && hover && (
          <Button
            position="absolute"
            top="0.5rem"
            right="1rem"
            p="0rem"
            bg="transparent"
            borderRadius="8px"
            border="none"
            color="gray.900"
            fontSize="1.5rem"
            _hover={{ background: 'fill.300', color: 'white' }}
            onClick={handleCleanImgSrc}
            cursor="default"
          >
            <MdClose />
          </Button>
        )}
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
          zIndex="10"
        >
          {imgUrl ? <IoReload size="2rem" /> : <BsUpload size="2rem" />}
        </Text>
        <Text fontSize="0.8rem" mt="0.5rem" textTransform="uppercase" fontWeight="semibold" zIndex="11">
          drag & drop or click {imgUrl ? 'to replace' : 'to upload'}
        </Text>
      </FormLabel>
      <Input
        type="file"
        id="metaImg"
        name="metaImg"
        display="none"
        onChange={(e) => handleOnChange(e)}
        onSubmit={(e) => handleOnSubmit(e)}
      />
    </FormControl>
  );
}
