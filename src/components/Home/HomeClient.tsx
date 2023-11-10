"use client";
import { useEffect, useMemo, useState } from "react";
import { typeOrder } from "@/lib/constants";
import { PostgrestError, User, UserMetadata } from "@supabase/supabase-js";
import HomeCard from "./HomeCard";
import QuestionCard from "./QuestionCard";

type GroupedData = {
  type: string;
  data: QuestionsData;
}[];

export default function HomeClient({
  userQuestionsDone,
  questions,
  userData,
  error,
}: {
  userQuestionsDone: Questions;
  questions: Questions;
  error: PostgrestError | null;
  userData: UserMetadata | undefined;
}) {
  const [questionsData, setQuestionData] = useState<QuestionsData | null>(null);

  useEffect(() => {
    if (questions && userQuestionsDone) {
      const updatedQuestions = questions.map((question) => {
        const isCompleted = userQuestionsDone.some(
          (userQuestionDone) => userQuestionDone.id === question.id
        );
        return {
          ...question,
          completed: isCompleted,
        };
      });
      setQuestionData(updatedQuestions);
    }
  }, [questions, userQuestionsDone]);

  function groupDatabyType(): GroupedData {
    const groupedData: { type: string; data: QuestionsData }[] = [];
    if (questionsData) {
      for (const item of questionsData) {
        const { type, title, id, gfg_link, lc_link, completed } = item;
        const existingGroup = groupedData.find((group) => group.type === type);

        if (existingGroup) {
          existingGroup.data.push({
            id,
            type,
            title,
            gfg_link,
            lc_link,
            completed,
          });
        } else {
          groupedData.push({
            type,
            data: [{ id, type, title, gfg_link, lc_link, completed }],
          });
        }
      }
    }
    return groupedData;
  }

  const groupData = groupDatabyType();

  const sortedGroupData = useMemo(() => {
    return typeOrder.map((type) =>
      groupData.find((group) => group.type === type)
    );
  }, [groupData]);

  const QuestionCards = () => {
    return (
      <>
        {sortedGroupData.map((group, i) => {
          if (group) {
            return (
              <div key={i}>
                <QuestionCard type={group.type} data={group.data} />
              </div>
            );
          }
        })}
      </>
    );
  };

  return (
    <>
      <HomeCard
        userData={userData}
        questions={questions}
        userQuestionsDone={userQuestionsDone}
      />
      <div className="relative grid grid-cols-2 gap-8 mt-9 max-h-[30rem] overflow-x-hidden p-2 overflow-y-scroll shadow-inner  ">
        {QuestionCards()}
      </div>
    </>
  );
}
