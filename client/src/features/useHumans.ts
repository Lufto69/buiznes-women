import { queryClient } from '@/shared/api/query-client'
import {
	fetchedAddHuman,
	fetchedDeleteHuman,
	fetchedHumans,
	fetchedOneHuman,
} from '@/shared/api/queryes'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useHumans = () => {
	const { data } = useQuery({
		queryKey: ['Humans'],
		queryFn: fetchedHumans,
	})

	return {
		humans: data,
	}
}

export const useOneHumans = (id: string | string[]) => {
	const { data, isLoading } = useQuery({
		queryKey: ['Human'],
		queryFn: () => fetchedOneHuman(id),
	})
	return {
		human: data,
		isLoading,
	}
}

export const useAddHumans = () => {
	const { mutate } = useMutation({
		mutationFn: fetchedAddHuman,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['Humans'],
			})
		},
	})
	return {
		humanAdd: mutate,
	}
}

export const useDeleteHumans = () => {
	const { mutate } = useMutation({
		mutationFn: fetchedDeleteHuman,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['Humans'],
			})
		},
	})
	return {
		humanDelete: mutate,
	}
}
