import { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
  type Question = {
    gfg_link: string | null;
    id: string;
    lc_link: string | null;
    title: string;
    type: string;
  };
  type Questions = Question[] | null;
  type QuestionData = {
    gfg_link: string | null;
    id: string;
    lc_link: string | null;
    title: string;
    type: string;
    completed:boolean
  };
  type QuestionsData = QuestionData[]
  type UserData = Partial<{
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    picture: string;
    preferred_username: string;
    provider_id: string;
    sub: string;
    user_name: string;
  }>;
  type UserQuestion = {
    created_at: string;
    id: string;
    question_id: string;
    user_id: string;
  };
  type UserQuestions = UserQuestion[];
}
// type Questions={
//     gfg_link: string | null,
//     id: string,
//     lc_link: string | null,
//     title: string,
//     type: string,
// }[]
// type Question={
//     gfg_link: string | null,
//     id: string,
//     lc_link: string | null,
//     title: string,
//     type: string,
// }

// type UserData = Partial<{
//   avatar_url: string;
//   email: string;
//   email_verified: boolean;
//   full_name: string;
//   iss: string;
//   name: string;
//   picture: string;
//   preferred_username: string;
//   provider_id: string;
//   sub: string;
//   user_name: string;
// }>;
