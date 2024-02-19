import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { navigation } from '@/lib/navigation';

export function Navigation({
  className,
  onLinkClick,
  packages,
}: {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
  packages: string[];
}) {
  let pathname = usePathname();

  const newNavigation = navigation.map((section) => {
    if (section.title !== 'Packages') {
      return section;
    }

    section.links = packages.map((p) => ({
      title: p,
      href: `/docs/packages/${p}`,
    }));

    return section;
  });

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {newNavigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display text-xl font-medium text-neutral-900 dark:text-paper">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-neutral-100 lg:mt-4 lg:border-neutral-200 dark:border-neutral-800"
            >
              {section.links?.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-0.5 before:top-1/2 before:h-full before:w-0.5 before:-translate-y-1/2',
                      link.href === pathname
                        ? 'font-semibold text-red-500 before:bg-red-500'
                        : 'text-neutral-700 before:hidden before:bg-neutral-700 hover:text-neutral-900 hover:before:block dark:text-neutral-200 dark:before:bg-neutral-400 dark:hover:text-white',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
