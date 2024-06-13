import AccidentForm from '../../components/accidentForm'
import { Button, Flex } from "@mantine/core"

export default function logAccident() {
    return (
        <Flex direction={"column"} align={"center"}>
            <h1>Hello</h1>
            <AccidentForm />
        </Flex>
    )
}