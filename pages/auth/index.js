import React from 'react'
//import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
//import Image from 'next/image'

import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
// from '@chakra-ui/react'
//
//import { FcGoogle } from 'react-icons/fc'
import {
	FaFacebookSquare,
	FaFacebookF,
	FaGoogle,
	FaTwitter,
} from 'react-icons/fa'

import Layout from '../../components/layout'
import styles from './auth.module.scss'

const myStyle = { width: '20px', paddingRight: '12px' }
const userImage = { width: '96px', height: '96px' }

export default function Auth() {
	const [session, loading] = useSession()
	//console.log("router");
	//console.log(r());
	return (
		<>
			<Layout>
				{!session && (
					<>
						<Heading>Autenticação</Heading>
						<br></br>

						<Button
							onClick={() => signIn('google')}
							colorScheme="red"
							size="md"
							className={styles.btn}
						>
							<div style={myStyle}>
								<FaGoogle />
							</div>
							Entrar com Google
						</Button>
					</>
				)}
				{session && (
					<>
						<Avatar
							alt={session.user.name}
							src={session.user.image}
							style={userImage}
						/>
						Signed in as {session.user.email} <br />
						<Button colorScheme="red" size="md" onClick={() => signOut()}>
							Sair
						</Button>
					</>
				)}
			</Layout>
		</>
	)
}

//<Button
//  onClick={() => signIn('twitter')}
//  colorScheme="twitter"
//  size="md"
//  className={styles.btn}
//>
//  <div style={myStyle}>
//    <FaTwitter />
//  </div>
//  Entrar com Twitter
//</Button>

// <Button
// 	onClick={() => signIn('facebook')}
// 	colorScheme="facebook"
// 	size="md"
// 	className={styles.btn}
// >
// 	<div style={myStyle}>
// 		<FaFacebookF />
// 	</div>
// 	Entrar com Facebook
// </Button>
