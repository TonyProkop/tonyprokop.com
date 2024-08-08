"use client"

import { Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Bootstrap from "../images/skills/bootstrap.svg"
import CircleCI from "../images/skills/circleci.svg"
import CoffeeScript from "../images/skills/coffeescript.svg"
import CSharp from "../images/skills/csharp.svg"
import CSS from "../images/skills/css.svg"
import Docker from "../images/skills/Docker.svg"
import DotNet from "../images/skills/dot-net.svg"
import DotNetCore from "../images/skills/dotnetcore.svg"
import Elasticsearch from "../images/skills/elasticsearch.svg"
import Eslint from "../images/skills/eslint.svg"
import Figma from "../images/skills/figma.svg"
import Git from "../images/skills/git.svg"
import GoogleCloud from "../images/skills/googlecloud.svg"
import Heroku from "../images/skills/heroku.svg"
import HTML from "../images/skills/html.svg"
import Javascript from "../images/skills/javascript.svg"
import Jest from "../images/skills/jest.svg"
import JQuery from "../images/skills/jquery.svg"
import MySql from "../images/skills/mysql.svg"
import Neovim from "../images/skills/neovim.svg"
import Netlify from "../images/skills/netlify.svg"
import Nextjs from "../images/skills/nextjs.svg"
import Postgres from "../images/skills/postgresql.svg"
import Rails from "../images/skills/rails.svg"
import React from "../images/skills/react.svg"
import Redis from "../images/skills/redis.svg"
import Redux from "../images/skills/redux.svg"
import Ruby from "../images/skills/ruby.svg"
import Storybook from "../images/skills/storybook.svg"
import Typescript from "../images/skills/typescript.svg"
import VSCode from "../images/skills/vscode.svg"
import Vue from "../images/skills/vue.svg"
import Webpack from "../images/skills/webpack.svg"

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
      name: "Typescript",
      image: Typescript,
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
      name: "Redux",
      image: Redux,
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
    {
      name: "jQuery",
      image: JQuery,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      name: "PostgreSQL",
      image: Postgres,
    },
    {
      name: "MySQL",
      image: MySql,
    },
    {
      name: "Neovim",
      image: Neovim,
    },
    {
      name: "Git",
      image: Git,
    },
  ]

  return (
    <Stack spacing={5}>
      <Typography variant="h2">Tech Skills</Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {skills.map((s) => (
          <Stack
            key={s.name}
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              backgroundColor: "var(--clr-surface)",
              borderRadius: "10px",
              paddingBlock: 2,
              paddingInline: 3,
            }}
          >
            <Image src={s.image} alt={s.name} height={20} />
            <Typography>{s.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Skills
