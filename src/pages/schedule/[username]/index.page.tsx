import { prisma } from '@/lib/prisma'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { ScheduleForm } from './ScheduleForm'

import { ContainerSchedule, UserHeader } from './styles'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({
  user: { name, bio, avatarUrl },
}: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agendar com ${name} | Ignite Call`} />

      <ContainerSchedule>
        <UserHeader>
          <Avatar src={avatarUrl} />
          <Heading>{name}</Heading>
          <Text>{bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </ContainerSchedule>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
