import CarForm from './lib/CarForm';
import CarSearch from './lib/SearchForm';

export default function Home() {
  return (
    <>
      <div>
        <CarForm />
      </div>
      <br />
      <div>
        <CarSearch />
      </div>
    </>
  );
}