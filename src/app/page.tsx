import Timer from "./components/timer";

const lastAccident = async () => {
  const res = await fetch('https://ll67t4w8d8.execute-api.eu-west-2.amazonaws.com/prod/lastAccident', {
    method: 'GET'
  })
  return await res.json()
}

export default async function Home() {
  const lastMovement = await lastAccident()
  console.log(lastMovement)
  return (
    <Timer lastAccident={lastMovement} />
  );
}
