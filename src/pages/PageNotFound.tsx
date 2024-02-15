import { Link, useLocation } from 'react-router-dom';
import { TbArrowBack } from "react-icons/tb";
import { Title } from '../components/Title';
import { Page404 } from '../components/Svg';

function PageNotFound() {
  const { pathname } = useLocation();

  return (
    <div className="h-screen flex flex-col items-center justify-center font-sans bg-moss bg-pattern">
      <Page404 />
      <Title className="mt-4 text-primary">{`Page ${pathname} not found`}</Title>
      <Link to="/" className='flex items-center gap-1 py-2 px-4 mt-2
      text-snow rounded transition-all duration-300 ease-in-out hover:text-primary hover:bg-dark/45 hover:underline'>
        <span>Back to home page</span>
        <TbArrowBack />
      </Link>
    </div>
  );
}

export default PageNotFound;
