import classNames, { Argument } from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: Argument[]) => twMerge(classNames(inputs))
