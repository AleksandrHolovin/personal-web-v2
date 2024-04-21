export default function ProjectPage({ params }: { params: { id: string } }) {
	return <div>My Project: {params.id}</div>;
}
