import { fetchedPrivilegeTags } from '@/shared/api/queryes'
import { useQuery } from '@tanstack/react-query'

export const usePrivilegeTags = () => {
	const { data } = useQuery({
		queryKey: ['PrivilegeTags'],
		queryFn: fetchedPrivilegeTags,
	})

	return {
		PrivilegeTags: data,
	}
}
