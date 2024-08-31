import { fetchedAddProject, fetchedDeleteProject, fetchedProjects } from '@/shared/api/queryes'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useProjects = () => {
	const { data } = useQuery({
		queryKey: ['Humans'],
		queryFn: fetchedProjects,
	})

	return {
		projects: data,
	}
}

export const useAddProject = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedAddProject,
	})

	return {
		data: data,
		projectAdd: mutate,
	}
}

export const useDeleteProject = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedDeleteProject,
	})

	return {
		data: data,
		projectDelete: mutate,
	}
}


