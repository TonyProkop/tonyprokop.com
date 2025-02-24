"use client";

import React, { useEffect, useState } from "react"
import { Button, Checkbox, Container, FormGroup, FormControlLabel, Typography } from "@mui/material"

const Guitar = () => {
  const [strings, setStrings] = useState<Array<number>>([]);
  const [activeQuestion, setActiveQuestion] = useState<string>('');
  const [quizQuestions, setQuizQuestions] = useState<Array<string>>([]);

  useEffect(() => {
    const newQuizQuestions: Array<string> = [];
    strings.forEach((string) => {
      const notes = ["A", "Bb/A#", "B/Cb", "C", "C#/Db", "D", "Eb/D#", "E", "F", "F#/Gb", "G", "G#/Ab"];
      notes.forEach((note) => {
        newQuizQuestions.push(`Play ${note} on the ${getLabel(string)} string`);
      });
    });
    setQuizQuestions(newQuizQuestions.sort( () => Math.random()-0.5)); // Randomize the order of the questions
    setActiveQuestion('');
  }, [strings]);

  const getChecked = (string: number) => {
    return strings.includes(string);
  }

  const getLabel = (string: number) => {
    switch (string) {
      case 1:
        return "E String (high)";
      case 2:
        return "B String";
      case 3:
        return "G String";
      case 4:
        return "D String";
      case 5:
        return "A String";
      case 6:
        return "E String (low)";
    }
  }

  const toggleString = (string: number) => {
    if (strings.includes(string)) {
      setStrings(strings.filter(s => s !== string));
    } else {
      setStrings([...strings, string]);
    }
  }

  const nextQuestion = () => {
    const question = quizQuestions[0];
    setActiveQuestion(question);
    setQuizQuestions(quizQuestions.slice(1));
  }

  return (
    <Container sx={{ marginBlock: 20 }}>
      <FormGroup>
        {[1, 2, 3, 4, 5, 6].map((string) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={getChecked(string)}
                onChange={() => { toggleString(string) }}
              />
            }
            key={string}
            label={getLabel(string)}
          />
        ))}
      </FormGroup>
      <Button onClick={nextQuestion}>Next Question</Button>
      <Typography variant="h4">{activeQuestion}</Typography>
    </Container>
  )
};

export default Guitar;
