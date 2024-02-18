import clsx from 'clsx';

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T;
}) {
  let Component = as ?? 'div';

  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert dark:text-neutral-400',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // H2
        'prose-h2:text-3xl prose-h2:leading-none',
        // H3
        'prose-h3:text-2xl prose-h3:leading-none',
        // H4
        'prose-h4:text-xl prose-h4:leading-none',
        // lead
        'prose-lead:text-neutral-500 dark:prose-lead:text-neutral-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-red-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.red.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.red.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-md prose-pre:bg-neutral-900 prose-pre:shadow-lg dark:prose-pre:bg-neutral-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-neutral-300/10',
        // hr
        'dark:prose-hr:border-neutral-800',
      )}
      {...props}
    />
  );
}
