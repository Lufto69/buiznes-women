import { fetchedAddPrivilege, fetchedDeletePrivilege, fetchedPrivilege } from '@/shared/api/queryes'
import { useMutation, useQuery } from '@tanstack/react-query'

export const usePrivilege = () => {
	const { data } = useQuery({
		queryKey: ['Privilege'],
		queryFn: fetchedPrivilege,
	})

	return {
		Privilege: data,
	}
}

export const useAddPrivilege = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedAddPrivilege,
	})

	return {
		data: data,
		privilegeAdd: mutate,
	}
}

export const useDeletePrivilege = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedDeletePrivilege,
	})

	return {
		data: data,
		privilegeDelete: mutate,
	}
}

