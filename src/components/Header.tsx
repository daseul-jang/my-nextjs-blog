import Link from 'next/link';

export default function Header() {
  const navList = [
    ['HOME', '/'],
    ['ABOUT', '/about'],
    ['POSTS', '/posts'],
    ['CONTACT', '/contact'],
  ];
  return (
    <header className='flex justify-between items-center p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>DADA BLOG</h1>
      </Link>
      <nav className='flex gap-4'>
        {navList.map(([title, url], index) => (
          <Link href={url} key={index}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
