import HomeClient from "./HomeClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestError } from "@supabase/supabase-js";
export default async function HomeServer() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: questions, error } = await supabase
    .from("Questions")
    .select("*");

  const {
    data: userQuestions,
    error: UserQuestionError,
  }: {
    data: UserQuestions | null;
    error: PostgrestError | null;
  } = await supabase
    .from("UserQuestionTable")
    .select("*")
    .eq("user_id", session?.user.id);

  const userQuestionDoneId: string[] | undefined = userQuestions?.map(
    (item) => item.question_id
  );

  const {
    data: userQuestionsDone,
    error: userQuestionDoneError,
  } = await supabase
    .from("Questions")
    .select("*")

    .in("id", userQuestionDoneId || []);

  return (
    <HomeClient
      userQuestionsDone={userQuestionsDone}
      userData={session?.user?.user_metadata}
      questions={questions}
      error={error}
    />
  );
}
