import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

type JaugeProps = {
  value: number;
}

const Jauge = ({ value }: JaugeProps) => {
  const ranks = value === 5 ? [1, 2, 3, 4, 5] : [1, 2, 3, 4];

  return (
    <Stack
      height={20}
      width={200}
      display={'flex'}
      direction={'row'}
      spacing={'10px'}
    >
      {ranks.map(r => (
        <Box
          key={r}
          height={20}
          width={value === 5 ? 31 : 40}
          sx={{
            backgroundColor: r <= value ? 'red' : 'white',
            transform: 'skew(-20deg)',
            border: 1
          }}
        />
      ))}
    </Stack>
  );
};

export default Jauge;
