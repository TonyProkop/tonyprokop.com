import { Card, CardContent, Stack, Typography } from "@mui/material"
import Image from "next/image"

type QuoteProps = {
  active: boolean
  image: any
  name: string
  position: string
  text: Array<string>
}

const Quote: React.FC<QuoteProps> = ({ active, image, name, position, text }) => {
  return (
    <Card
      sx={{
        filter: active ? "none" : "blur(4px)",
        flexBasis: "500px",
        flexShrink: 0,
        // transform: active ? "scale(1.2)" : "scale(1)",
      }}
    >
      <CardContent>
        <Stack spacing={4}>
          <div>
            {text.map((text: string) => (
              <Typography
                key={text}
                variant="body1"
                sx={{ fontStyle: "italic" }}
              >
                &quot;{text}&quot;
              </Typography>
            ))}
          </div>
          <Stack alignItems="center" direction="row" gap={2}>
            <Image src={image} alt={name} height="50" />
            <Stack>
              <Typography fontWeight={400}>{name}</Typography>
              <Typography marginTop={0} variant="body2">{position}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Quote
