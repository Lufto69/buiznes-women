import { Footer } from '@/widgets/footer/footer'
import { Header } from '@/widgets/header/header'
import { Partners } from '@/widgets/partners/partners'
import { Project } from '@/widgets/projects/projects'
export default function ProjectPage() {
	return (
		<>
			<Header />
			<Project />
			<Partners />
			<Footer />
		</>
	)
}
