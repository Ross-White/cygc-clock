"use client"
import { useState, useEffect } from "react";
import { lastAccident } from "@/helpers/getLastAccident";

export default function Timer() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const startDate = lastAccident()

    useEffect(() => {
        setInterval(() => {
            const currentTime = Date.now()
            const timeDifference = currentTime - startDate
            const newDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const newHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const newMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const newSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);
        }, 1000)
    })
  
    return(
        <h2>{days}d {hours}h {minutes}m {seconds}s</h2>
    )
}