'use client';
import { PageAnimatePresence } from '@/common/components';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem={true}>
			<ChakraProvider>
				<PageAnimatePresence>{children}</PageAnimatePresence>
			</ChakraProvider>
		</ThemeProvider>
	);
}
