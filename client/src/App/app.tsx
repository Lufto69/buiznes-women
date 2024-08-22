import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { AppProvider } from './app-providers'

const RobotoMono = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700'],
	display: 'swap',
})

export function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<div className={RobotoMono.className}>
				<Component {...pageProps} />
			</div>
		</AppProvider>
	)
}
