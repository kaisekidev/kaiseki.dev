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
        'prose prose-slate max-w-none dark:prose-invert dark:text-paper',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // H1
        'prose-h1:text-5xl prose-h2:leading-none',
        // H2
        'prose-h2:text-3xl prose-h2:leading-none',
        // H3
        'prose-h3:text-2xl prose-h3:leading-none',
        // H4
        'prose-h4:text-xl prose-h4:leading-none',
        // lead
        'prose-lead:text-neutral-500 dark:prose-lead:text-neutral-400',
        // links
        'prose-a:text-blue-700 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-500 prose-a:underline prose-a:shadow-none ',
        // pre
        'prose-pre:rounded-md prose-pre:bg-neutral-900 prose-pre:shadow-lg dark:prose-pre:bg-neutral-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-neutral-300/10',
        // hr
        'dark:prose-hr:border-neutral-800',
      )}
      {...props}
    />
  );
}
