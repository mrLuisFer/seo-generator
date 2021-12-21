import { Container } from '@chakra-ui/react'
import Header from '../Header'
import MenuMobile from '../../MenuMobile'
import { gray } from 'lib/chakraColors'

export default function Layout({ children }) {
	return (
		<Container maxW="container.xl" p="1rem 2rem" color={gray.$900}>
			<Header />
			{children}
			<MenuMobile />
		</Container>
	)
}
