"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import QuestionCard from "./QuestionCard";
import CircularProgressBar from "../Home/CircularProgressBar";

export default function TopicClient({
  searchParams,
  topicQuestions,
  userQuestionsDone,
}: {
  topicQuestions: Questions;
  searchParams: string | undefined;
  userQuestionsDone: Questions;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // const fixedTopicQuestions = topicQuestions?.map((question) => ({
  //   ...question,
  //   completed: false,
  // }));
  // const fixedUserQuestionDone = userQuestionsDone?.map((question) => ({
  //   ...question,
  //   completed: true,
  // }));
  const [
    finalTopicQuestions,
    setFinalTopicQuestions,
  ] = useState<QuestionsData | null>(null);

  useEffect(() => {
    if (topicQuestions && userQuestionsDone) {
      const updatedQuestions = topicQuestions.map((question) => {
        const isCompleted = userQuestionsDone.some(
          (userQuestionDone) => userQuestionDone.id === question.id
        );
        return {
          ...question,
          completed: isCompleted,
        };
      });
      setFinalTopicQuestions(updatedQuestions);
    }
  }, []);

  function calculatePercentage() {
    const progress = userQuestionsDone?.length;
    if (progress && topicQuestions) {
      const percentage = (progress / topicQuestions?.length) * 100;
      return parseFloat(percentage.toFixed(1));
    }
    return 0;
  }

  const filteredQuestions = finalTopicQuestions?.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayQuestions = () =>
    filteredQuestions?.map((question) => {
      return (
        <div className="text-lg" key={question.id}>
          <QuestionCard question={question} />
        </div>
      );
    });

  return (
    <main className="flex flex-col">
      <section className="">
        <div className="flex items-center justify-between   mb-6 h-full w-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border px-10 py-9  ">
          <div className="flex justify-center  flex-col">
            <p className="text-6xl font-bold mb-4">Topic: {searchParams}</p>
            <p className="text-3xl ml-2 font-semibold mb-4">
              Total no. of questions: {finalTopicQuestions?.length}
            </p>
            <p className="text-3xl ml-2 font-semibold text-brand mb-4">
              {topicQuestions &&
                userQuestionsDone &&
                topicQuestions?.length - userQuestionsDone?.length}{" "}
              more to go
            </p>
          </div>
          <div className="">
            <CircularProgressBar
              percentage={calculatePercentage()}
              circleWidth={200}
              strokeWidth={20}
            />
          </div>
        </div>

        <div className="flex w-full  items-center space-x-2">
          <Input
            placeholder="Search"
            className="text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="base" className="bg-brand  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
        </div>
      </section>
      <div></div>
      <article className="relative mt-3 rounded-md  flex flex-col max-h-[30rem]   overflow-x-hidden border pt-4 py-3  overflow-y-scroll shadow-inner p-4 space-y-2 ">
        {displayQuestions()}
      </article>
    </main>
  );
}
