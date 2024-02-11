import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: 'w-fit px-2 py-1 font-sans rounded-md hover:brightness-75 transition-all delay-300 ease-in-out',
  variants: {
    color: {
      primary: 'text-primary bg-moss dark:text-moss dark:bg-snow',
      secondary: 'text-moss bg-primary dark:text-moss dark:bg-primary',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md px-3 py-1.5',
      lg: 'text-lg px-4 py-1.5',
      xl: 'text-xl px-5 py-2',
    },
    weight: {
      thin: 'font-thin',
      semi: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    weight: 'semi',
  },
});

interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color'>,
    VariantProps<typeof button> {
  children: string;
}

export const Button = ({
  children,
  size,
  color,
  className,
  ...rest
}: ButtonProps) => {
  const classes = twMerge(button({ size, color }), className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
