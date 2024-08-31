import {
	fetchedAddHumanTag,
	fetchedAddInListHumanTag,
	fetchedDeleteTag,
	fetchedHumanTags,
	fetchedPrivilegeTags,
	fetchedSortHumanTags,
} from '@/shared/api/queryes'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAllTag = () => {
	const { data } = useQuery({
		queryKey: ['Tags'],
		queryFn: fetchedHumanTags,
	})

	return {
		tags: data,
	}
}

export const useHumanTag = () => {
	const { data } = useQuery({
		queryKey: ['HumanTags'],
		queryFn: fetchedSortHumanTags,
	})

	return {
		sortTags: data,
	}
}

export const usePrivilegeTags = () => {
	const { data } = useQuery({
		queryKey: ['PrivilegeTags'],
		queryFn: fetchedPrivilegeTags,
	})

	return {
		PrivilegeTags: data,
	}
}

export const useAddHumanTag = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedAddHumanTag,
	})

	return {
		data: data,
		humanTagAdd: mutate,
	}
}

export const useAddInListHumanTag = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedAddInListHumanTag,
	})

	return {
		data: data,
		humanInListTagAdd: mutate,
	}
}

export const useDeleteTag = () => {
	const { data, mutate } = useMutation({
		mutationFn: fetchedDeleteTag,
	})

	return {
		data: data,
		humanDeleteHuman: mutate,
	}
}
