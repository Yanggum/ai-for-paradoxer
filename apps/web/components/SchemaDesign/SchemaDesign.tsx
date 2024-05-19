import React, { useState } from 'react'
import { Box, Button, Grid, TextInput, Table, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { useRouter } from 'next/router'

export default function SchemaDesign() {
	const [schemas, setSchemas] = useState([])
	const form = useForm({
		initialValues: {
			name: '',
			type: '',
			description: '',
		},
	})
	
	const addSchema = () => {
		setSchemas([...schemas, form.values])
		form.reset()
	}
	
	const deleteSchema = (index) => {
		setSchemas(schemas.filter((_, i) => i !== index))
	}
	
	return (
		<Box>
			<h3>Schema Design</h3>
			<form onSubmit={form.onSubmit(addSchema)}>
				<Grid>
					<Grid.Col span={4}>
						<TextInput label="Name" {...form.getInputProps('name')} required />
					</Grid.Col>
					<Grid.Col span={4}>
						<TextInput label="Type" {...form.getInputProps('type')} required />
					</Grid.Col>
					<Grid.Col span={4}>
						<TextInput label="Description" {...form.getInputProps('description')} />
					</Grid.Col>
				</Grid>
				<Button mt="md" type="submit" leftIcon={<IconPlus size={14} />}>
					Add Schema
				</Button>
			</form>
			<Table mt="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Name</Table.Th>
						<Table.Th>Type</Table.Th>
						<Table.Th>Description</Table.Th>
						<Table.Th>Actions</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{schemas.map((schema, index) => (
						<Table.Tr key={index}>
							<Table.Td>{schema.name}</Table.Td>
							<Table.Td>{schema.type}</Table.Td>
							<Table.Td>{schema.description}</Table.Td>
							<Table.Td>
								<Button color="red" onClick={() => deleteSchema(index)} leftIcon={<IconTrash size={14} />}>
									Delete
								</Button>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Box>
	)
}
