import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// "use client";
// import { PostgrestError } from "@supabase/supabase-js";
// import HomeCard from "./HomeCard";

// type GroupedData = {
//   type: string;
//   data: Question[];
// }[];

// export default function HomeClient({
//   questions,
//   error,
// }: {
//   questions: Questions;
//   error: PostgrestError | null;
// }) {
//   function groupDatabyType(): GroupedData {
//     const groupedData: { type: string; data: Question[] }[] = [];
//     if (questions) {
//       for (const item of questions) {
//         const { type, title, id, gfg_link, lc_link } = item;
//         const existingGroup = groupedData.find((group) => group.type === type);

//         if (existingGroup) {
//           existingGroup.data.push({ id, type, title, gfg_link, lc_link });
//         } else {
//           groupedData.push({
//             type,
//             data: [{ id, type, title, gfg_link, lc_link }],
//           });
//         }
//       }
//     }
//     return groupedData;
//   }
//   const groupData = groupDatabyType();

//   const QuestionCards = () => {
//     return (
//       <>
//         {groupData.map((group, i) => {
//           return (
//             <div key={i}>
//               <h1>{group.type}</h1>
//               <p>Total no. : {group.data.length}</p>
//             </div>
//           );
//         })}
//       </>
//     );
//   };
//   return (
//     <>
//       <HomeCard />
//       <div className="">{QuestionCards()}</div>
//     </>
//   );
// }