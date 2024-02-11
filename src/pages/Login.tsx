import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '../components/InputField';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useApi';

const regex = new RegExp('^(?=.*[a-zA-Z])(?=.*\\d).{8,20}$');

const loginSchema = z.object({
  email: z.string().email('It must be a valid email'),
  password: z
    .string()
    .min(8, "Password can't be less than 8 characters")
    .max(20, "Password can't be more than 20 characters")
    .regex(regex, 'Password must contain at least one number and one letter'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { isPending, mutate: loginUser } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const login = (userPayload: LoginSchema) => {
    loginUser(userPayload, {
      onSuccess: () => navigate('/tasks'),
    });
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 lg:w-2/3 bg-moss">{/* image */}</div>
      <div className="flex flex-col justify-center items-center w-full p-4 bg-snow md:w-1/2 lg:w-1/3">
        <Title className="text-lg mb-6 sm:mb-8 xs:text-2xl">
          Log in to your account
        </Title>
        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col w-3/5 gap-2 md:w-4/5"
        >
          <InputField
            id="email"
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />
          <InputField
            id="password"
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            icon={isPasswordVisible ? MdVisibility : MdVisibilityOff}
            onIconClick={() => setIsPasswordVisible((prev) => !prev)}
            error={errors.password?.message}
            {...register('password')}
          />
          <Button
            className="my-4 disabled:bg-slate-600 disabled:cursor-not-allowed sm:mt-4 sm:mb-6"
            disabled={isPending}
          >
            Log in
          </Button>
        </form>
        <p className="text-moss">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-secondary transition-all delay-200 ease-in-out hover:text-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
