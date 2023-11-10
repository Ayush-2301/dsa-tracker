import TopicServer from "@/components/Topic/TopicServer";

export default function TopicPage({ params }: { params: { type: string } }) {
  return <TopicServer params={params} />;
}
