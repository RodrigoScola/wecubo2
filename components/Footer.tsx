import Link from 'next/link';

export default function Footer() {
     return <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-500 dark:bg-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Cubo.
               todos os direitos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
               <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Termos de serviço
               </Link>
               <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Privacidade
               </Link>
          </nav>
     </footer>;
}