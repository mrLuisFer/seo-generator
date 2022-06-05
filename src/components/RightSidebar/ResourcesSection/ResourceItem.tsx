import { Box, Heading } from '@chakra-ui/react'
import { IResource } from './resources'
import { useDarkMode } from 'hooks/useDarkMode'
import { gray } from 'utils/chakraColors'

type ResourceItemProps = {
  resource: IResource
}

export default function ResourceItem({ resource }: ResourceItemProps) {

  const { isDarkMode } = useDarkMode()

  return (
    <Box
      key={resource.title}
      as="a"
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      bg={isDarkMode ? gray.$600 : gray.$400}
      color={isDarkMode ? gray.$100 : gray.$800}
      borderRadius='1.5rem'
      _hover={{ textDecoration: "underline" }}
      m="0.5rem 0"
    >
      <Heading as="h2" fontSize="1rem" fontWeight="500">
        {resource.title}
      </Heading>
    </Box>
  )
}
