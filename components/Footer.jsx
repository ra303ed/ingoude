import { logo } from '@/public';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinksOne } from './../constant/index';

const FooterColumn = ({title, links}) => {
  <div className='flex flex-col gap-5'>
    <h4 className='text-xl font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => <Link href='/' key={link}>{link}</Link> )}
    </ul>
  </div>
}


const Footer = () => {
  return (
    <footer className='bg-gray-300'>
      <div className='flex flex-wrap gap-12'>
        <h1>footer</h1>
        <FooterColumn title={footerLinksOne[0].title} links={footerLinksOne[0].links} />
      </div>

    </footer>
  )
}

export default Footer
