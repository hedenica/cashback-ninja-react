import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size: string;
  color: string;
}

export function Button (props: ButtonProps) {
  const { className, children, size, color, ...remainingProps } = props

  const types = {
    size: `--${size}`,
    color: `--${color}`,
  }

  return (
    <button
      className={clsx(
        className,
        styles.button,
        size && [styles[types.size]],
        color && [styles[types.color]],
      )}
      {...remainingProps}
    >
      {children}
    </button>
  )
}
