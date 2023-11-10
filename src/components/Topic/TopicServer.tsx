import TopicClient from "./TopicClient";
import { fixedType } from "@/lib/constants";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function TopicServer({
  params,
}: {
  params: { type: string };
}) {
  const searchParams: string | undefined = fixedType.find(
    (type) => type.key === params.type
  )?.text;
  if (!searchParams) return;

  const supabase = createServerComponentClient<Database>({
    cookies,
  });
  const { data: questions, error } = await supabase
    .from("Questions")
    .select()
    .eq("type", searchParams);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: userQuestions,
  }: {
    data: UserQuestions | null;
  } = await supabase
    .from("UserQuestionTable")
    .select("*")
    .eq("user_id", session?.user.id);

  const userQuestionDoneId: string[] | undefined = userQuestions?.map(
    (item) => item.question_id
  );

  const { data: userQuestionsDone } = await supabase
    .from("Questions")
    .select("*")
    .in("id", userQuestionDoneId || [])
    .eq("type", searchParams);

  return (
    <TopicClient
      searchParams={searchParams}
      topicQuestions={questions}
      userQuestionsDone={userQuestionsDone}
    />
  );
}
