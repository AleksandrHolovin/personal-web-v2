import { AnimatePresence } from 'framer-motion';

import { NAVIGATION_ITEMS } from '@/common/constants';
import { NavigationItem } from './components/NavigationItem';
import './components/styles.css';

export const Navigation: React.FC = () => {
	return (
		<nav className="wrapper flex flex-col items-end px-[50px] mt-[100px] mb-[200px]">
			<AnimatePresence>
				{NAVIGATION_ITEMS.map((item, index) => (
					<NavigationItem
						key={index}
						index={index}
						label={item.label}
						link={item.link}
					/>
				))}
			</AnimatePresence>
		</nav>
	);
};
