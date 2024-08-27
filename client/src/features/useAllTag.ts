import { fetchedHumanTags } from '@/shared/api/queryes'
import { useQuery } from '@tanstack/react-query'

export const useAllTag = () => {
	const { data } = useQuery({
		queryKey: ['Tags'],
		queryFn: fetchedHumanTags,
	})

	return {
		tags: data,
	}
}
