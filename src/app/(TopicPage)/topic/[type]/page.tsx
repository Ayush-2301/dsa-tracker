export default function TopicPage({ params }: { params: { type: string } }) {
  return <div>{params.type}</div>;
}
