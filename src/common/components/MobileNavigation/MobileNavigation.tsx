'use client';
import { useRef } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FooterLink } from '../Footer/components/FooterLink';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { x: 300, opacity: 0 },
	animate: { x: 0, opacity: 1 },
};
const BLOCK_STYLE: HTMLMotionProps<'div'>['style'] = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
};

export const MobileNavigation: React.FC = () => {
	const btnRef = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<button
				onClick={onOpen}
				className="appearance-none fixed md:hidden left-[50px] top-[20px] cursor-pointer">
				<motion.div
					key="entering"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}>
					<Bars3Icon className="h-6 w-6 text-appBlack dark:text-white" />
				</motion.div>
			</button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef as any}>
				<DrawerOverlay bg="rgba(255,255,255,0.5)" />
				<DrawerContent>
					<DrawerBody p={0}>
						<div
							className="
							text-appBlack 
							dark:text-white 
							bg-white 
							dark:bg-appBlack
							h-[100%]
							text-sm
							flex
							flex-col
							items-end
							px-[20px]">
							<button
								onClick={onClose}
								className="appearance-none absolute right-[20px] top-[20px] cursor-pointer">
								<XMarkIcon className="h-6 w-6 text-appBlack dark:text-white" />
							</button>
							<motion.div
								key="internal-links"
								transition={{
									duration: HOME_ITEMS_ANIMATION_DURATION,
								}}
								style={{
									marginTop: '60px',
									...BLOCK_STYLE,
								}}
								{...ANIMATION_STYLE}>
								<FooterLink
									number="01"
									label="about"
									link="about"
								/>
								<FooterLink
									number="02"
									label="journal"
									link="journal"
								/>
							</motion.div>
							<motion.div
								key="external-links"
								transition={{
									delay: 0.1,
									duration: HOME_ITEMS_ANIMATION_DURATION,
								}}
								style={{
									marginTop: '20px',
									...BLOCK_STYLE,
								}}
								{...ANIMATION_STYLE}>
								<FooterLink
									number="03"
									label="twitter"
									link="twitter"
								/>
								<FooterLink
									number="04"
									label="instagram"
									link="instagram"
								/>
								<FooterLink
									number="05"
									label="linkedin"
									link="linkedin"
								/>
							</motion.div>
							<motion.div
								key="data"
								transition={{
									delay: 0.2,
									duration: HOME_ITEMS_ANIMATION_DURATION,
								}}
								style={{
									marginTop: '20px',
									...BLOCK_STYLE,
								}}
								{...ANIMATION_STYLE}>
								<div>Oleksandr Holovin</div>
								<div>Web Development</div>
							</motion.div>
							<motion.div
								key="contact"
								transition={{
									delay: 0.3,
									duration: HOME_ITEMS_ANIMATION_DURATION,
								}}
								style={{
									marginTop: '20px',
									...BLOCK_STYLE,
								}}
								{...ANIMATION_STYLE}>
								<div>Kharkiv</div>
								<div className="font-bold">
									oleksandr@holovin.com
								</div>
							</motion.div>
							<ThemeSwitch
								transitionProps={{
									duration: HOME_ITEMS_ANIMATION_DURATION,
								}}
								containerStyles="absolute left-[20px] top-[20px]"
							/>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
