"use client";
import { DateTimePicker } from "@mantine/dates"
import { Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

interface FormData {
  member: string
  description: string
  date: string
}

export default function AccidentForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      date: '',
      description: ''
    }
  })

  const submit = async (FormData: FormData) => {
    try {
      const response = await fetch('/api/postAccident', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData)
      })
      const data = await response.json()
      console.log('success', data)
    } catch (error) {
      console.log('error', error)
    }
  }


  return (
    <form onSubmit={form.onSubmit((values) => submit(values))}>
      <TextInput
        label="name"
        placeholder="Member's Name"
        key={form.key('member')}
        {...form.getInputProps('member')}
      />
      <TextInput
        label="description"
        placeholder="Description"
        key={form.key('description')}
        {...form.getInputProps('description')}
      />      
      <DateTimePicker
        clearable
        valueFormat="DD MMM YYYY hh:mm A"
        label="date"
        placeholder="Pick date and time"
        {...form.getInputProps('date')}
      />
      <Group justify="flex-start" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  )
}
