import Link from 'next/link';
import { SVGProps } from 'react';

export function NavLink(props: { href: string, name: string; }) {
     return <Link className="text-sm font-medium hover:underline underline-offset-4" href={`${props.href}`}>
          {props.name}
     </Link>;
}

function CuboidIcon(props: SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
               <path d="M10 22v-8L2.25 9.15" />
               <path d="m10 14 11.77-6.87" />
          </svg>
     );
}
export function Nav() {
     return <header className="px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
               <CuboidIcon className="h-6 w-6" />
               <span className="ml-2 text-xl font-semibold">Cubo</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
               <NavLink href='/#pricing' name='Preço' />
               <NavLink href='/produtos' name='Produtos' />
               <NavLink href='/quemSomos' name='Quem Somos' />
               <NavLink href='/contato' name='Contato' />
          </nav>
     </header>;
}