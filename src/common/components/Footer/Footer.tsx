import { FooterLink } from './components/FooterLink';

export const Footer: React.FC = () => {
	return (
		<footer
			className="
		w-screen 
		h-[100px]
		absolute 
		bottom-0 
		px-[50px] 
		py-[20px] 
		flex 
		items-center 
		justify-between 
		text-white 
		text-sm">
			<div className="flex gap-5">
				<div>
					<div>Oleksandr Holovin</div>
					<div>Web Development</div>
				</div>
				<div>
					<div>Kharkiv</div>
					<div className="font-bold">oleksandr@holovin.com</div>
				</div>
				<div>
					<FooterLink number="01" label="about" link="about" />
					<FooterLink number="02" label="journal" link="journal" />
					{/* <div className="hover:scale-95 text-xs">
						01 <span className="font-bold text-sm">about</span>
					</div>
					<div>
						02 <span className="font-bold text-sm">journal</span>
					</div> */}
				</div>
			</div>
			<div>
				<FooterLink number="03" label="twitter" link="twitter" />
				<FooterLink number="04" label="instagram" link="instagram" />
				<FooterLink number="05" label="linkedin" link="linkedin" />
				{/* <div>
					03 <span className="font-bold text-sm">twitter</span>
				</div>
				<div>
					04 <span className="font-bold  text-sm">instagram</span>
				</div>
				<div>
					05 <span className="font-bold  text-sm">linkedin</span>
				</div> */}
			</div>
		</footer>
	);
};
