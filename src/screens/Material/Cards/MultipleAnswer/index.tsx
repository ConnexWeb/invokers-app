// import React, { useState, useEffect } from "react";
// import { View } from "react-native";

// import * as S from "./styles";

// const MultipleAnswer = () => {

//   const [answers, setAnswers] = useState<Answer[]>([]);
//   const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
//   const [isChecking, setIsChecking] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showErrorFeedback, setShowErrorFeedback] = useState(false);

//   const { initAd, unlockReward, setUnlockReward, rewardType } = useReward();

//   const handleSubmit = () => {
//     setShowErrorFeedback(true);

//     setAnswers((prevAnswers) => {
//       return prevAnswers.map((answer, index) => {
//         if (index === selectedAnswer) {
//           setIsCorrect(answer.isCorrect);

//           if (!answer.isCorrect) {
//             removeAnswerTry();
//           }

//           return {
//             ...answer,
//             variant: answer.isCorrect ? "correct" : "incorrect",
//           };
//         }

//         return {
//           ...answer,
//         };
//       });
//     });
//   };

//   const handleQuestionClick = (indexQuestion: number) => {
//     // Previne que o usuário clique em outra questão enquanto a resposta está corrigida
//     if (showErrorFeedback) {
//       return;
//     }

//     setSelectedAnswer(indexQuestion);
//     setIsChecking(true);

//     setAnswers((prevAnswers) => {
//       return prevAnswers.map((answer, index) => {
//         if (index === indexQuestion) {
//           return {
//             ...answer,
//             variant: "checking",
//           };
//         }

//         return {
//           ...answer,
//           variant: "disabled",
//         };
//       });
//     });
//   };

//   const handleNextQuestion = () => {
//     setIsChecking(false);
//     setShowErrorFeedback(false);
//     setSelectedAnswer(0);

//     setAnswers((prevAnswers) => {
//       return prevAnswers.map((answer) => {
//         return {
//           ...answer,
//           variant: undefined,
//         };
//       });
//     });

//     nextCard({ isCorrect, answer: answers[selectedAnswer].answer });
//     setUnlockReward(false);
//   };

//   const showCorrectAnswer = () => {
//     setAnswers((prevAnswers) => {
//       return prevAnswers.map((answer) => {
//         if (answer.isCorrect) {
//           return { ...answer, variant: "correct" };
//         }

//         return { ...answer };
//       });
//     });
//   };

//   useEffect(() => {
//     initAd();
//     setAnswers(question.choices);
//     setShowErrorFeedback(false);
//     setIsChecking(false);
//   }, [question]);

//   useEffect(() => {
//     if (unlockReward) {
//       console.log("unlockReward multiple");

//       if (rewardType === "review") {
//         showCorrectAnswer();
//       }
//     }
//   }, [unlockReward]);

//   if (!question || !answers) {
//     return <View />;
//   }

//   return (
//     <S.Wrapper>
//       <S.WrapperQuestions>
//         <S.Question>{question.question}</S.Question>

//         <S.Questions>
//           {answers.map((answer, index) => (
//             <Button
//               onPress={() => handleQuestionClick(index)}
//               key={index}
//               type="answer"
//               variant={answer.variant}
//             >
//               {answer.answer}
//             </Button>
//           ))}
//         </S.Questions>
//       </S.WrapperQuestions>

//       <S.WrapperButton>
//         <ButtonFeedback
//           showErrorFeedback={showErrorFeedback}
//           handleNextQuestion={handleNextQuestion}
//           handleSubmit={handleSubmit}
//           isCorrect={isCorrect}
//           isChecking={isChecking}
//           rewardOwned={unlockReward && rewardType === "review"}
//           rewardFunction={showCorrectAnswer}
//         />
//       </S.WrapperButton>
//     </S.Wrapper>
//   );
// };

// export default MultipleAnswer;
