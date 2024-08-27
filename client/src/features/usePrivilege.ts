import { fetchedPrivilege } from '@/shared/api/queryes'
import { useQuery } from '@tanstack/react-query'

export const usePrivilege = () => {
	const { data } = useQuery({
		queryKey: ['Privilege'],
		queryFn: fetchedPrivilege,
	})

	return {
		Privilege: data,
	}
}
