import { Title } from "@mantine/core";
import Link from 'next/link'

export default async function Home() {

  return (
    <>
      <Title>Hello from the clock</Title>
      <Link href='/clock'>See the clock</Link>
    </>
  );
}
