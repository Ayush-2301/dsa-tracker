import Link from "next/link";
import CircularProgressBar from "./CircularProgressBar";

type props = {
  type: string;
  data: QuestionsData;
};

export default function QuestionCard({ type, data }: props) {
  function calculateProgress() {
    const progress = data?.filter((item) => item.completed === true);
    return progress.length;
  }
  function calculatePercentage() {
    const progress = calculateProgress();
    const percentage = (progress / data.length) * 100;
    return parseFloat(percentage.toFixed(1));
  }
  return (
    <Link
      href={`/topic/${type
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("")}`}
    >
      <div className="h-full w-full flex bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border px-10 py-9 justify-between cursor-pointer hover:scale-[1.01] hover:shadow-sm  transition-transform ease-in-out ">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">Topic : {type}</p>
          <div className="space-y-2 text-lg font-semibold">
            <p>Total no. of questions : {data.length}</p>
            <p>{data.length - calculateProgress()} More to go</p>
          </div>
        </div>
        <CircularProgressBar
          percentage={calculatePercentage()}
          circleWidth={150}
          strokeWidth={15}
        />
      </div>
    </Link>
  );
}
