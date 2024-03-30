import Link from 'next/link';

interface IFooterLinkProps {
	number: string;
	label: string;
	link: string;
}
export const FooterLink: React.FC<IFooterLinkProps> = ({
	number,
	label,
	link,
}) => {
	return (
		<Link href={link}>
			<div className="hover:scale-95 text-xs">
				{number} <span className="font-bold text-sm">{label}</span>
			</div>
		</Link>
	);
};
