import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
}

export function Input ({
  className,
  type,
  ...remainingProps
}: InputProps) {
  return (
    <input
      className={clsx(className, styles.input)}
      type={type}
      {...remainingProps}
    />
  )
}
