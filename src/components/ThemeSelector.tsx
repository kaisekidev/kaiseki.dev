import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { Listbox } from '@headlessui/react'

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
];

const icons = {
  light: LightIcon,
  dark: DarkIcon,
  system: SystemIcon,
} as const;

function LightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </svg>
  );
}

function DarkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

function SystemIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  );
}

function ThemeSelectorButton({
  selected,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  selected: boolean;
}) {
  return (
    <button
      className={clsx(
        'flex h-8 w-8 items-center justify-center rounded-md',
        selected
          ? 'bg-dark/5 fill-red-500 dark:bg-paper/20'
          : 'fill-dark dark:fill-paper',
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ThemeSelector(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  let { theme, setTheme } = useTheme();
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6" />;
  }

  return (
    <>
    <div className="hidden md:flex rounded-md p-1.5 ring-1 ring-neutral-200">
      {themes.map((t) => {
        return (
          <ThemeSelectorButton
            key={t.value}
            selected={t.value === theme}
            onClick={() => setTheme(t.value)}
          >
            <t.icon className="h-4 w-4" />
          </ThemeSelectorButton>
        );
      })}
    </div>
      <div className="md:hidden">
      <Listbox as="div" value={theme} onChange={setTheme} {...props}>
        <Listbox.Label className="sr-only">Theme</Listbox.Label>
        <Listbox.Button
          className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-200 dark:ring-inset dark:ring-white/5 "
          aria-label="Theme"
        >
          <LightIcon
            className={clsx(
              'h-4 w-4 dark:hidden',
              theme === 'system' ? 'fill-dark' : 'fill-red-400',
            )}
          />
          <DarkIcon
            className={clsx(
              'hidden h-4 w-4 dark:block',
              theme === 'system' ? 'fill-paper' : 'fill-red-400',
            )}
          />
        </Listbox.Button>
        <Listbox.Options className="absolute left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-md bg-paper p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
          {themes.map((theme) => (
            <Listbox.Option
              key={theme.value}
              value={theme.value}
              className={({ active, selected }) =>
                clsx(
                  'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                  {
                    'text-red-500': selected,
                    'text-slate-900 dark:text-paper': active && !selected,
                    'text-slate-700 dark:text-paper': !active && !selected,
                    'bg-dark/5 dark:bg-paper/20': active,
                  },
                )
              }
            >
              {({ selected }) => (
                <>
                  <div className="rounded-md bg-paper p-1 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-inset dark:ring-paper/10">
                    <theme.icon
                      className={clsx(
                        'h-4 w-4',
                        selected
                          ? 'fill-red-400 dark:fill-red-400'
                          : 'fill-slate-400',
                      )}
                    />
                  </div>
                  <div className="ml-3">{theme.name}</div>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      </div>
    </>
  );
}
