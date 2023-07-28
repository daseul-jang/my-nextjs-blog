import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        src={profileImage}
        alt='프로필 사진'
        className='rounded-full mx-auto'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{'안녕, 나는 DADA.'}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>멋있는 개발자로 성장하길 희망해요</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          contact
        </button>
      </Link>
    </section>
  );
}
