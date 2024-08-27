import { fetchedProjects } from '@/shared/api/queryes'
import { useQuery } from '@tanstack/react-query'

export const useProjects = () => {
	const { data } = useQuery({
		queryKey: ['Humans'],
		queryFn: fetchedProjects,
	})

	return {
		projects: data,
	}
}
