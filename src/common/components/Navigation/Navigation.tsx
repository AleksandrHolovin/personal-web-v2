import { NavigationItem } from './components/NavigationItem';
import { NAVIGATION_ITEMS } from './constants';
import './components/styles.css';

export const Navigation: React.FC = () => {
	return (
		<nav className="wrapper flex flex-col items-end px-[50px] mt-[100px] mb-[200px]">
			{NAVIGATION_ITEMS.map((item, index) => (
				<NavigationItem
					key={index}
					label={item.label}
					link={item.link}
				/>
			))}
		</nav>
	);
};
