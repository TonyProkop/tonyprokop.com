import { Box, Grid, Slider } from '@mui/material'
import CodeBlock, { Language } from './CodeBlock'

const FloodFill = () => {
  const grid = [
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const code = `const FloodFill = () => {
  const grid = [
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return (
    <Box>
      <CodeBlock code={code} language={Language.JAVASCRIPT} />
      <Grid container spacing={2} sx={{
        border: '1px solid var(--clr-overlay)',
        marginBlock: 10,
      }}>
        {grid.map((row) => row.map((n, i) => (
          <Grid
            item
            xs={1}
            key={i}
            sx={{
              display: 'grid',
              placeItems: 'center',
              padding: '1rem',
              border: '1px solid var(--clr-overlay)',
              backgroundColor: n === 1 ? 'var(--clr-muted)' : 'transparent',
              aspectRatio: '1 / 1',
            }}
          />
        )))}
      </Grid>
      <Slider
        aria-label="Small steps"
        defaultValue={1}
        // getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />

    </Box>
  )
}`


  return (
    <Box>
      <CodeBlock code={code} language={Language.JSX} />
      <Grid container spacing={2} sx={{
        border: '1px solid var(--clr-overlay)',
        marginBlock: 10,
      }}>
        {grid.map((row) => row.map((n, i) => (
          <Grid
            item
            xs={1}
            key={i}
            sx={{
              display: 'grid',
              placeItems: 'center',
              padding: '1rem',
              border: '1px solid var(--clr-overlay)',
              backgroundColor: n === 1 ? 'var(--clr-muted)' : 'transparent',
              aspectRatio: '1 / 1',
            }}
          />
        )))}
      </Grid>
      <Slider
        aria-label="Small steps"
        defaultValue={1}
        // getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />

    </Box>
  )
}

export default FloodFill
