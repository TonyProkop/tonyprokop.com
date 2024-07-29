import { SyntheticEvent, useState } from "react"
import { Box, Tab, Tabs, Typography } from "@mui/material"

const WorkExperience = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const jobs = [
    {
      company: "WP Engine",
      role: "Senior Software Engineer",
      date: "January 2022 - Present",
      bullets: [
        'Built "Chat GPT-esc" feature which led to a 45% decrease in support live chat volume',
        "Maintain component library used by over 100 engineers",
        "Led initiative to reduce app dependence on jQuery and Bootstrap",
      ],
    },
    {
      company: "Flywheel",
      role: "Senior Software Engineer",
      date: "January 2020 - December 2022",
      bullets: ["testing bullet 1 ", "testing bullet 2", "testing bullet3 "],
    },
    {
      company: "Speedway Motors",
      role: "Software Engineer",
      date: "January 2016 - December 2020",
      bullets: ["testing bullet 1 ", "testing bullet 2", "testing bullet3 "],
    },
  ]

  return (
    <>
      <Typography variant="h2">Work Experience</Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Work Experience"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {jobs.map((job, index) => (
            <Tab
              key={job.company}
              label={job.company}
              id={`tab-${index}`}
              aria-controls={`panel-${index}`}
            />
          ))}
        </Tabs>
        {jobs.map((job, index) => (
          <div
            key={job.company}
            role="tabpanel"
            hidden={value !== index}
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            <Typography variant="h3">
              {job.role} @ {job.company}
            </Typography>
            <Typography>{job.date}</Typography>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>
                  <Typography>{bullet}</Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Box>
    </>
  )
}

export default WorkExperience
