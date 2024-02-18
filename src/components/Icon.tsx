import { useId } from 'react';
import clsx from 'clsx';

import { InstallationIcon } from '@/components/icons/InstallationIcon';
import { LightbulbIcon } from '@/components/icons/LightbulbIcon';
import { PluginsIcon } from '@/components/icons/PluginsIcon';
import { PresetsIcon } from '@/components/icons/PresetsIcon';
import { ThemingIcon } from '@/components/icons/ThemingIcon';
import { WarningIcon } from '@/components/icons/WarningIcon';

const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
};

const iconStyles = {
  red: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)] [--icon-color:theme(colors.red.200)]',
  blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
  amber:
    '[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
};

export function Icon({
  icon,
  color = 'red',
  className,
  ...props
}: {
  color?: keyof typeof iconStyles;
  icon: keyof typeof icons;
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>) {
  let id = useId();
  let IconComponent = icons[icon];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  );
}

const gradients = {
  red: [
    { stopColor: 'hsl(6, 93%, 94%)', offset: '.08' },
    { stopColor: 'hsl(7, 86%, 60%)', offset: '.837' },
  ],
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
};

export function Gradient({
  color = 'blue',
  ...props
}: {
  color?: keyof typeof gradients;
} & Omit<React.ComponentPropsWithoutRef<'radialGradient'>, 'color'>) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  );
}

export function LightMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'g'>) {
  return <g className={clsx('dark:hidden', className)} {...props} />;
}

export function DarkMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'g'>) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />;
}
