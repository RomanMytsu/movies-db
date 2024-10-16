import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Button, Stack } from "@mui/material";

interface PagerProps {
  current: number;
  onNext(): void;
  onPrev(): void;
}

export function Pager({ current, onNext, onPrev }: PagerProps) {
  return (
    <Stack direction="row" sx={{ mb: 3 }} spacing={2}>
      <Button variant="contained" startIcon={<SkipPreviousIcon />} onClick={onPrev}>
        Previos
      </Button>
      <Button variant="outlined" disabled>
        {current}
      </Button>
      <Button variant="contained" endIcon={<SkipNextIcon />} onClick={onNext}>
        Next
      </Button>
    </Stack>
  );
}
