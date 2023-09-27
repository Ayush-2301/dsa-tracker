import CircularProgressBar from "./CircularProgressBar";
import { UserMetadata } from "@supabase/supabase-js";

export default function HomeCard({
  userData,
  questions,
  userQuestionsDone,
}: {
  userData: UserMetadata | undefined;
  questions: Questions;
  userQuestionsDone: Questions;
}) {
  function calculateProgress() {
    if (userQuestionsDone && questions) {
      const percentage = (userQuestionsDone?.length / questions?.length) * 100;
      return parseFloat(percentage.toFixed(1));
    } else return 0;
  }
  return (
    <>
      <main className="h-full w-full flex bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border px-10 py-9 justify-around ">
        <section className="flex flex-col max-w-[70%]  justify-center">
          <p className="text-6xl font-bold mb-4 ">
            {userData ? <>{userData?.user_name}</> : "Please login"}
          </p>
          <p className="text-3xl font-semibold text-brand mb-2">
            You are doing great
          </p>
          <p className="max-w-full text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            fugiat nulla laborum dolores sunt quisquam sit repudiandae in
            dolorem officiis.
          </p>
        </section>
        <section className="max-w-[30%] p-4 h-[300px] w-[300px]  flex justify-center items-center ">
          <CircularProgressBar
            percentage={calculateProgress()}
            circleWidth={200}
            strokeWidth={20}
          />
        </section>
      </main>
    </>
  );
}
