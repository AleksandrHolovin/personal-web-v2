'use client';
import { useEffect, useRef } from 'react';

interface INavigationItemProps {
	label: string;
	link: string;
}
export const NavigationItem: React.FC<INavigationItemProps> = ({
	label,
	link,
}) => {
	const divRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	if (divRef.current) {
	// 		divRef.current.style.transform = `rotateY(40deg) rotateX(40deg)`;
	// 	}
	// }, []);

	return (
		<div
			ref={divRef}
			className="text-[150px] text-appBlack py-[5px] leading-[150px] font-bold uppercase font-nav">
			{label}
		</div>
	);
};
