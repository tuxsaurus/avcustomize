import React from 'react'
//import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import Image from 'next/image'

import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
// from '@chakra-ui/react'

import Layout from '../../components/layout'

const myStyle = { width: '20px', paddingRight: '12px' }
const userImage = { width: '96px', height: '96px' }

//<Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
export default function Auth() {
  const [session, loading] = useSession()
  //console.log("router");
  //console.log(r());
  return (
    <>
      <Layout>
        {!session && (
          <>
            <h1>Autenticação</h1>
            <br></br>

            <Button
              onClick={() => signIn('google')}
              colorScheme="teal"
              size="md"
            >
              <div style={myStyle}>
                <Image
                  src="/auth/g_logo.png"
                  alt="google logo"
                  layout="responsive"
                  width={24}
                  height={24}
                />
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
            <Button colorScheme="teal" size="md" onClick={() => signOut()}>
              Sair
            </Button>
          </>
        )}
      </Layout>
    </>
  )
}
