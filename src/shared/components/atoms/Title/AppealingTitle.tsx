import { cn } from 'modules/shared'
import { TitleLevels, TitleSizes, TitleWeight } from '.'

interface TitleProps {
  id?: string
  children: React.ReactNode
  className?: string
  level?: TitleLevels
  size?: TitleSizes
  weight?: TitleWeight
}

export const appealingTitleStyles = ({
  size = TitleSizes.sm,
  className,
  weight = 'font-medium',
}: {
  size?: TitleSizes
  className?: string
  weight?: TitleWeight
}) => {
  const sizes = {
    [TitleSizes.xs]: 'text-base leading-5 md:text-2xl md:leading-8',
    [TitleSizes.sm]: 'text-xl leading-7 md:text-3xl md:leading-[38px]',
  }

  return cn('font-syne', sizes[size] ?? '', weight, className)
}

export const AppealingTitle = ({
  id,
  children,
  className,
  level = TitleLevels.H1,
  size = TitleSizes.sm,
  weight = 'font-medium',
}: TitleProps) => {
  const classNames = appealingTitleStyles({ className, size, weight })

  return (
    {
      [TitleLevels.H1]: (
        <h1 id={id} className={classNames}>
          {children}
        </h1>
      ),
      [TitleLevels.H2]: (
        <h2 id={id} className={classNames}>
          {children}
        </h2>
      ),
      [TitleLevels.H3]: (
        <h3 id={id} className={classNames}>
          {children}
        </h3>
      ),
      [TitleLevels.H4]: (
        <h4 id={id} className={classNames}>
          {children}
        </h4>
      ),
      [TitleLevels.H5]: (
        <h5 id={id} className={classNames}>
          {children}
        </h5>
      ),
      [TitleLevels.H6]: (
        <h6 id={id} className={classNames}>
          {children}
        </h6>
      ),
    }[level] ?? null
  )
}
