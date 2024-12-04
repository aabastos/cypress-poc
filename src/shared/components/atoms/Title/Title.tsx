import classNames from 'classnames'

interface TitleProps {
  id?: string
  children: React.ReactNode
  className?: string
  size?:
    | 'huge'
    | 'large-display'
    | 'display'
    | 'large-heading'
    | 'heading'
    | 'small-heading'
    | 'micro-heading'
    | 'sub-heading'
  color?: 'text-neutral-darkest' | 'text-neutral-dark' | 'text-neutral-medium' | 'text-brand-medium'
  onClick?: () => void
}

export const Title = ({
  id,
  children,
  className,
  size,
  color = 'text-neutral-darkest',
  onClick,
}: TitleProps) => {
  if (size === 'huge')
    return (
      <h1
        id={id}
        onClick={onClick}
        className={classNames(
          'font-inter font-medium tracking-[-0.02em] text-5xl md:text-[64px]',
          color,
          className,
        )}
      >
        {children}
      </h1>
    )

  if (size === 'large-display' || size === 'display')
    return (
      <h2
        id={id}
        onClick={onClick}
        className={classNames(
          {
            'font-inter font-medium tracking-[-0.02em] text-[32px] md:text-5xl':
              size === 'large-display',
            'font-inter font-medium tracking-[-0.02em] leading-[43px] text-2xl md:text-[32px]':
              size === 'display',
          },
          color,
          className,
        )}
      >
        {children}
      </h2>
    )

  if (size === 'large-heading' || size === 'heading')
    return (
      <h3
        id={id}
        onClick={onClick}
        className={classNames(
          {
            'font-inter font-medium tracking-[-0.02em] text-xl md:text-2xl':
              size === 'large-heading',
            'font-inter font-medium tracking-[-0.02em] text-base md:text-xl': size === 'heading',
          },
          color,
          className,
        )}
      >
        {children}
      </h3>
    )

  return (
    <h4
      id={id}
      onClick={onClick}
      className={classNames(
        {
          'font-inter font-medium tracking-[-0.01em] text-sm md:text-base':
            size === 'small-heading',
          'font-inter font-medium tracking-[-0.02em] text-xs md:text-sm': size === 'micro-heading',
          'font-inter font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs':
            size === 'sub-heading',
        },
        color,
        className,
      )}
    >
      {children}
    </h4>
  )
}
