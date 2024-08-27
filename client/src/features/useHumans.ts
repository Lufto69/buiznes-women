import { fetchedHumans } from '@/shared/api/queryes'
import { useQuery } from '@tanstack/react-query'

export const useHumans = () => {
	const { data } = useQuery({
		queryKey: ['Humans'],
		queryFn: fetchedHumans,
	})

	return {
		humans: data,
	}
}
