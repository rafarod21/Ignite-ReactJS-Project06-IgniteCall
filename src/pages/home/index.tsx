import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Hero, HomeContainer, Preview } from './styles'

import previewImg from '../../assets/app-preview.png'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImg}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </HomeContainer>
  )
}
