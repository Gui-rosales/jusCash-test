import { ComponentProps, forwardRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { cn } from '../../app/utils/cn';
import { RxCrossCircled } from 'react-icons/rx';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;
    const [type, setType] = useState<'password' | 'text'>('password');

    function handleToggle() {
      if (type === 'password') {
        //etIcon(eye);
        setType('text');
      } else {
        //setIcon(eyeOff);
        setType('password');
      }
    }
    return (
      <div className="relative">
        <div className="flex relative">
          <input
            {...props}
            ref={ref}
            type={type}
            name={name}
            id={inputId}
            placeholder={placeholder}
            className={cn(
              'w-full border-[1px] border-secondaryDarker p-2 transition-all focus:border-secondaryDarker outline-none',
              error && '!border-red-900',
              className
            )}
          />
          <span
            onClick={handleToggle}
            className="flex justify-center items-center"
          >
            {type === 'password' ? (
              <AiFillEye
                className="mr-10 absolute"
                size={25}
              />
            ) : (
              <AiFillEyeInvisible
                className="mr-10 absolute"
                size={25}
              />
            )}
          </span>
        </div>

        {/* <label
            htmlFor={inputId}
            className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
          >
            {placeholder}
          </label> */}

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <RxCrossCircled />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
