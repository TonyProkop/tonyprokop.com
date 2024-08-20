import { SyntheticEvent, useState } from "react"
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import ArrowRight from "./icons/ArrowRight"

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
        "Added integration with Spli.io to improve feature flagging for all engineers",
        "Led initiative upgrade jQuery and Bootstrap two major versions and reduce app dependence on them",
      ],
    },
    {
      company: "Flywheel",
      role: "Senior Software Engineer",
      date: "January 2020 - December 2022",
      bullets: [
        "Develop the majority of frontend code for Flywheel’s newest flagship product, Growth Suite",
        "Work in a fast-paced agile environment, launching Growth Suite in under a year",
        "Teach Vue in the company’s mentorship program",
        "Lead the frontend guild, a group of engineers who want to improve the frontend",
        "Maintain a JIRA board separate from product teams to coordinate frontend work",
      ],
    },
    {
      company: "Speedway Motors",
      role: "Software Engineer",
      date: "January 2016 - December 2020",
      bullets: [
        "Lead a small team focused on optimizing the checkout flow, leading to increased conversion",
        "Maintained a healthy sense of urgency to ship value to production several times a week",
        "Communicated with stakeholders to gather requirements and align on goals",
        "Focused on minimum viable product to reduce opportunity cost",
        "Delivered code safely with test driven development, unit tests, and feature flags",
        "Made data driven decisions based on a/b tests",
        "Developed and maintained applications built with .NET and React",
      ],
    },
  ]

  return (
    <Stack spacing={5}>
      <Typography variant="h2Alt">Work Experience</Typography>
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
        >
          {jobs.map((job, index) => (
            <Tab
              key={job.company}
              label={job.company}
              id={`tab-${index}`}
              aria-controls={`panel-${index}`}
              sx={{
                textAlign: "left",
              }}
            />
          ))}
        </Tabs>
        {jobs.map((job, index) => (
          <Box
            key={job.company}
            role="tabpanel"
            hidden={value !== index}
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            sx={{
              flexBasis: "100%",
              flexGrow: 1,
            }}
          >
            <Typography variant="h3">
              {job.role}{" "}
              <Box component="span" sx={{ color: "var(--clr-iris)" }}>
                @ {job.company}
              </Box>
            </Typography>
            <Typography sx={{ color: "var(--clr-subtle)" }}>
              {job.date}
            </Typography>
            <List dense>
              {job.bullets.map((bullet) => (
                <ListItem alignItems="flex-start" key={bullet}>
                  <ListItemIcon
                    sx={{
                      marginTop: 1,
                      minWidth: "48px",
                      svg: {
                        width: "20px",
                        height: "auto",
                      },
                    }}
                  >
                    <ArrowRight />
                  </ListItemIcon>
                  <ListItemText primary={bullet} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default WorkExperience
