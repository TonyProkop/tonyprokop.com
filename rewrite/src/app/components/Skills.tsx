import { Stack } from "@mui/material"
import Image from "next/image"
import Javascript from "../images/skills/javascript.svg"
import HTML from "../images/skills/html.svg"
import CSS from "../images/skills/css.svg"
import React from "../images/skills/react.svg"
import Vue from "../images/skills/vue.svg"
import Ruby from "../images/skills/ruby.svg"
import Rails from "../images/skills/rails.svg"

type Skill = {
  name: string
  image: any
}

const Skills = () => {
  const skills: Array<Skill> = [
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "HTML",
      image: HTML,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "React",
      image: React,
    },
    {
      name: "Vue",
      image: Vue,
    },
    {
      name: "Ruby",
      image: Ruby,
    },
    {
      name: "Rails",
      image: Rails,
    },
  ]

  return (
    <Stack direction="row" spacing={2}>
      {skills.map(s => (
        <Stack direction="row" key={s.name} spacing={1} sx={{
          backgroundColor: '#eee',
          borderRadius: '8px',
          padding: 1,
        }}>
          <Image src={s.image} alt={s.name} height={20} />
          <div>
          {s.name}
          </div>
        </Stack>
      ))}
    </Stack>
  )
}

export default Skills
