import { queryClient } from '@/shared/api/query-client'
import {
	fetchedAddProject,
	fetchedDeleteProject,
	fetchedProjects,
} from '@/shared/api/queryes'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useProjects = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['Project'],
		queryFn: fetchedProjects,
	})

	return {
		projects: data,
		isLoading,
	}
}

export const useAddProject = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedAddProject,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['Project'],
			})
		},
	})

	return {
		data: data,
		projectAdd: mutate,
	}
}

export const useDeleteProject = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedDeleteProject,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['Project'],
			})
		},
	})

	return {
		data: data,
		projectDelete: mutate,
	}
}
