import Portal from 'components/common/Portal';
import MetatagsModal from 'components/MetaTagsModal';
import { useHasTextOnInputs } from 'hooks/useHasTextOnInputs';
import { useState } from 'react';
import { GenerateMetatagsBtn } from '../Header';
import { Box, Fade, useColorModeValue } from '@chakra-ui/react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { useShowPreviewCtx } from 'context/ShowPreview';

export default function MinimalSidebar() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [showExpandBtn, setShowExpandBtn] = useState<boolean>(false);

  const hasTextOnInputs: boolean = useHasTextOnInputs();
  const { setShowPreview } = useShowPreviewCtx();

  return (
    <>
      <Box
        p="1rem 1.5rem"
        position="relative"
        onMouseEnter={() => setShowExpandBtn(true)}
        onMouseLeave={() => setShowExpandBtn(false)}
      >
        <GenerateMetatagsBtn setIsOpen={setIsOpenModal} />
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          right="0"
          top="0"
          bottom="0"
          p="0 1rem"
        >
          <Fade in={showExpandBtn}>
            <Box
              as="button"
              bg={useColorModeValue('gray.200', 'gray.900')}
              p="1rem"
              display="block"
              fontSize="2rem"
              borderRadius="20px"
              _hover={{ boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)', opacity: '1' }}
              _active={{ transform: 'scale(0.95)' }}
              opacity="0.3"
              cursor="pointer"
              transition="0.2s ease"
              title="Show preview sidebar"
              onClick={() => setShowPreview(true)}
            >
              <BsArrowBarLeft />
            </Box>
          </Fade>
        </Box>
      </Box>
      {isOpenModal && hasTextOnInputs && (
        <Portal id="metatags">
          <MetatagsModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
        </Portal>
      )}
    </>
  );
}
