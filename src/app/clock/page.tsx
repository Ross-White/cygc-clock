import { Flex } from "@mantine/core"
import Timer from '../../components/timer'
import Link from 'next/link'

const lastAccident = async () => {
  const res = await fetch('https://09kwinpgv5.execute-api.eu-west-2.amazonaws.com/prod/accidents', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.ACCIDENTS_API_KEY}`,
    }
  })
  return await res.json()
}

export default async function Clock() {
  const lastMovement = await lastAccident()

  return (
    <Flex direction={"column"} align={"center"}>
      <h1>The Clock</h1>
      <Timer lastAccident={lastMovement} />
      <h2>Since an accident</h2>
      <Link href='/logAccident'>Record Accident</Link>
    </Flex>
  );
}
