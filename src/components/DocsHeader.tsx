'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { navigation } from '@/lib/navigation';

export function DocsHeader({ title }: { title?: string }) {
  let pathname = usePathname();
  let section = navigation.find((section) =>
    section.links?.find((link) => link.href === pathname),
  );

  if (!title && !section) {
    return null;
  }

  return (
    <header className={clsx(
      'space-y-1',
      title && 'mb-9'
    )}>
      {section && (
        <p className="font-display text-xl font-medium text-red-500">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-5xl leading-none tracking-normal text-neutral-900 dark:text-paper">
          {title}
        </h1>
      )}
    </header>
  );
}
