import { Card, CardContent, Stack, Typography } from "@mui/material"
import Image from "next/image"

type QuoteProps = {
  image: any
  name: string
  position: string
  text: Array<string>
}

const Quote: React.FC<QuoteProps> = ({ image, name, position, text }) => {
  return (
    <Card sx={{ height: '100%', padding: 1 }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack spacing={4} justifyContent="space-between" height="100%">
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
              <Typography marginTop={0} variant="body2" sx={{ color: 'var(--clr-subtle)' }}>{position}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Quote
