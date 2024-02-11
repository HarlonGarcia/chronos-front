import { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Title from '../components/Title';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 lg:w-2/3 bg-moss">{/* image */}</div>
      <div className="flex flex-col justify-center items-center w-full p-4 bg-snow md:w-1/2 lg:w-1/3">
        <Title className="text-lg mb-6 sm:mb-8 xs:text-2xl">
          Log in to your account
        </Title>
        <form className="flex flex-col w-3/5 gap-2 md:w-4/5">
          <InputField id="email" label="Email" type="email" required />
          <InputField
            id="password"
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            icon={isPasswordVisible ? MdVisibility : MdVisibilityOff}
            onIconClick={() => setIsPasswordVisible((prev) => !prev)}
            minLength={8}
            required
          />
          <Button className="my-4 sm:mt-4 sm:mb-6">Log in</Button>
        </form>
        <p className="text-moss">
          Don't have an account?{' '}
          <a
            className="text-secondary transition-all delay-200 ease-in-out hover:text-primary"
            href="/signup"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
