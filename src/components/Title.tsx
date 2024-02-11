import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const title = tv({
  base: 'font-extrabold font-qs mb-2',
  variants: {
    color: {
      primary: 'text-moss',
      secondary: 'text-primary',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-xl',
      xl: 'text-xl mb-3',
      eg: 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'primary',
  },
});

interface TitleProps
  extends Omit<ComponentProps<'h1'>, 'color'>,
    VariantProps<typeof title> {
  children: string;
}

function Title({ children, size, color, className, ...rest }: TitleProps) {
  const classes = twMerge(title({ size, color }), className);

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
}

export default Title;
