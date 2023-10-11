import Slider from '@mui/material/Slider';

export default function Home() {
  return (
    <main>
      <Slider defaultValue={30} />
      <Slider
        defaultValue={30}
        className='text-red-600'
      />
    </main>
  );
}
