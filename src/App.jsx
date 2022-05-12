import React, { useCallback, useEffect, useState } from 'react';
import Feedback from './Feedback';

export default function App() {
	const [showFeedback, setShowFeedback] = useState(false)
	const questions = [
		{
			questionText: 'When was Nettwerk founded?',
			answerOptions: [
				{ answerText: '1982', isCorrect: false },
				{ answerText: '1989', isCorrect: false },
				{ answerText: '1984', isCorrect: true },
				{ answerText: '1987', isCorrect: false },
			],
		},
		{
			questionText: 'Which genre was Nettwerk most known for in its early days?',
			answerOptions: [
				{ answerText: 'Tropical House', isCorrect: false },
				{ answerText: 'Industrial Dance', isCorrect: true },
				{ answerText: 'Singer-Songwriter', isCorrect: false },
				{ answerText: 'Indie Pop', isCorrect: false },
			],
		},
		{
			questionText: 'How many active label artist names start with the letter C?',
			answerOptions: [
				{ answerText: '15', isCorrect: true },
				{ answerText: '20', isCorrect: false },
				{ answerText: '25', isCorrect: false },
				{ answerText: '30', isCorrect: false },
			],
		},
		{
			questionText: 'Which artist is NOT a former Nettwerk label artist?',
			answerOptions: [
				{ answerText: 'Skinny Puppy', isCorrect: false },
				{ answerText: 'fun.', isCorrect: false },
				{ answerText: 'Tiesto', isCorrect: false },
				{ answerText: 'Coldplay', isCorrect: true },
			],
		},
		{
			questionText: 'Which well-known video game company did Nettwerk partner with to release video games soundtracks?',
			answerOptions: [
				{ answerText: 'Electronic Arts', isCorrect: true },
				{ answerText: 'Nintendo', isCorrect: false },
				{ answerText: 'Rockstar Games', isCorrect: false },
				{ answerText: 'Warner Brothers Interactive', isCorrect: false },
			],
		},
		{
			questionText: 'Who was the first digital distributor of Nettwerk catalog?',
			answerOptions: [
				{ answerText: 'Warner Music Group', isCorrect: false },
				{ answerText: 'EMI', isCorrect: false },
				{ answerText: 'InGrooves', isCorrect: false },
				{ answerText: 'Nettwerk', isCorrect: true },
			],
		},
		{
			questionText: 'Which festival did Nettwerk help create?',
			answerOptions: [
				{ answerText: 'Coachella', isCorrect: false },
				{ answerText: 'Osheaga', isCorrect: false },
				{ answerText: 'Lilith Fair', isCorrect: true },
				{ answerText: 'Woodstock', isCorrect: false },
			],
		},
		{
			questionText: 'Who has been employed at Nettwerk the longest?',
			answerOptions: [
				{ answerText: 'Jason Currell', isCorrect: false },
				{ answerText: 'John Rummen', isCorrect: true },
				{ answerText: 'Jeff Ballard', isCorrect: false },
				{ answerText: 'Liz Erman', isCorrect: false },
			],
		},
		{
			questionText: 'Which artist released a record through Nettwerk first?',
			answerOptions: [
				{ answerText: 'Sarah McLachlan', isCorrect: false },
				{ answerText: 'Delerium', isCorrect: false },
				{ answerText: 'Moev', isCorrect: true },
				{ answerText: 'Mystery Machine', isCorrect: false },
			],
		},
		{
			questionText: 'Which city has never had a Nettwerk office?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Boston', isCorrect: false },
				{ answerText: 'Nashville', isCorrect: false },
				{ answerText: 'Munich', isCorrect: true },
			],
		},
		{
			questionText: 'Who has a dog with the nickname Baby Cow?',
			answerOptions: [
				{ answerText: 'Chantal Iorio', isCorrect: true },
				{ answerText: 'Penny Palmer', isCorrect: false },
				{ answerText: 'Angela Wincentowich', isCorrect: false },
				{ answerText: 'Jen Foster', isCorrect: true },
			],
		},
		{
			questionText: 'Which Passenger song was featured in a Budweiser Super Bowl ad?',
			answerOptions: [
				{ answerText: 'All The Little Lights', isCorrect: false },
				{ answerText: 'Let Her Go', isCorrect: true },
				{ answerText: 'Heart\'s on Fire', isCorrect: false },
				{ answerText: 'Whispers', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false)

	const handleAnswerOptionClick = useCallback((isCorrect) => {
		if (isCorrect) {

			/* alert("Correct!"); */
			setScore(score + 1);			
		} 

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		setShowFeedback(true)
		setIsCorrect(isCorrect)
	});

	useEffect(()=>{
		const timer = setTimeout(() => {
			setShowFeedback(false)
		  }, 2000);
		  return () => clearTimeout(timer);
	},[handleAnswerOptionClick])

	const handleRestart = ()=>{
		setCurrentQuestion(0)
		setScore(0)
		setShowScore(false)
	}
	return (
		<div className='app relative'>
				{
					showFeedback ?<Feedback isCorrect={isCorrect} setShowFeedback={setShowFeedback} answer={questions[currentQuestion].questionText}/>	:<></>
				}
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}.
					<button onClick ={handleRestart }>Try again</button>
				</div>
			) : (
				<>
			
					
					<div className='question-section relative'>
					
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>

					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, idx) => (
							<button key={idx} className='button m-4' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
