import React, { useState } from "react";
import "./App.css";

type Question = {
  question: string;
  options: string[];
  correct: number;
};

type Answer = {
  question: string;
  selected: string;
  correct: boolean;
};

const questions: Question[] = [
  {
    question: "Mis on Eesti pealinn?",
    options: ["Tallinn", "Tartu", "Narva"],
    correct: 0
  },
  {
    question: "Kui palju on 2 + 2?",
    options: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "Mis värvi on taevas selge ilmaga?",
    options: ["Roheline", "Sinine", "Punane"],
    correct: 1
  },
  {
    question: "Kes on see ainuke loom, kes ei oska hüpata?",
    options: ["Kaelkirjak", "Jõehobu", "Elevant"],
    correct: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswer = (index: number) => {
    const correct = questions[currentQuestion].correct === index;

    const newAnswer: Answer = {
      question: questions[currentQuestion].question,
      selected: questions[currentQuestion].options[index],
      correct
    };

    setAnswers([...answers, newAnswer]);

    setFeedback(correct ? "Õige vastus!" : "Vale vastus!");

    setTimeout(() => {
      setFeedback("");

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1200);
  };

  const score = answers.filter(a => a.correct).length;

  const getMessage = () => {
    if (score === questions.length) return "Suurepärane tulemus!";
    if (score >= 2) return "Tubli töö!";
    return "Harjuta veel!";
  };

  if (showResults) {
    return (
      <div className="container">
        <h1>Viktoriini tulemused</h1>

        <table data-testid="results-table">
          <thead>
            <tr>
              <th>Küsimus</th>
              <th>Sinu vastus</th>
              <th>Tulemus</th>
            </tr>
          </thead>

          <tbody>
            {answers.map((a, index) => (
              <tr key={index}>
                <td>{a.question}</td>
                <td>{a.selected}</td>
                <td>{a.correct ? "Õige" : "Vale"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 data-testid="final-score">
          Skoor: {score} / {questions.length}
        </h2>

        <p>{getMessage()}</p>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="container">
      <h1>Viktoriin</h1>

      <h2 data-testid="question">{q.question}</h2>

      <div className="answers">
        {q.options.map((option, index) => (
          <button
            key={index}
            data-testid={`answer-${index}`}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>

      <p data-testid="feedback">{feedback}</p>

      <p>
        Küsimus {currentQuestion + 1} / {questions.length}
      </p>
    </div>
  );
}

export default App;
