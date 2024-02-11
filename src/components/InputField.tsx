import { ComponentProps, forwardRef } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const input = tv({
  base: 'font-normal font-sans py-2 px-3 rounded-md ring-2 transition-all delay-200 ease-in-out',
  variants: {
    color: {
      primary: 'text-primary bg-moss focus:ring-primary focus:ring-1',
      secondary: 'text-moss bg-secondary',
    },
    size: {
      md: 'text-md sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl py-3 px-4 sm:text-2xl',
      eg: 'text-2xl sm:text-3xl',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'primary',
  },
});

const labelSize = {
  md: 'text-md font-normal',
  lg: 'text-lg',
  xl: 'text-xl',
  eg: 'text-2xl',
};

interface InputFieldProps
  extends Omit<ComponentProps<'input'>, 'color' | 'size'>,
    VariantProps<typeof input> {
  label: string;
  error?: string;
  icon?: IconType;
  onIconClick?: () => void;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      id,
      size = 'lg',
      color,
      label,
      error,
      icon,
      onIconClick,
      ...rest
    } = props;

    const labelClasses = twMerge('text-moss font-semibold', labelSize[size]);
    const inputClasses = twMerge(
      `w-full ring-transparent ${error && 'ring-error'}`,
      input({ size, color }),
    );

    const Icon = icon;

    return (
      <div className={`flex flex-col gap-1`}>
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
        <div className="relative">
          <input ref={ref} className={inputClasses} id={id} {...rest} />
          {Icon && (
            <Icon
              className="absolute right-3 bottom-[calc(50%_-_8px)] h-[16px] w-[16px] text-primary cursor-pointer
                md:right-4 md:bottom-[calc(50%_-_10px)] md:h-[20px] md:w-[20px]"
              onClick={onIconClick}
            />
          )}
        </div>
        {error && <p className="text-error">{error}</p>}
      </div>
    );
  },
);
