"use client";
import { useState, useEffect } from "react";
// import { lastAccident } from "@/helpers/getLastAccident";
import { Button, Flex } from "@mantine/core";

interface Props {
  lastAccident: string
}

export default function Timer({lastAccident}: Props) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const startDate: number = new Date(lastAccident).getTime()

  useEffect(() => {
    setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = currentTime - startDate;
      const newDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);
  });

  return (
    <Flex direction={"column"} align={"center"}>
      <h1>The Clock</h1>
      <h2>
        {days}d {hours}h {minutes}m {seconds}s
      </h2>
      <h2>Since an accident</h2>
      <Button>Record Accident</Button>
    </Flex>
  );
}
