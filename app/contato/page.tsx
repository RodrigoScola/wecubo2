

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Contato() {
     return (
          <main className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 py-12 md:py-24">
               <div className="container px-4 md:px-6 max-w-5xl space-y-8">
                    <div className="text-center space-y-4">
                         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50">Entre em Contato</h1>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 space-y-6">
                         <form className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   <div className="space-y-2">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input id="name" placeholder="Digite seu Nome" />
                                   </div>
                                   <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Digite seu Email" type="email" />
                                   </div>
                              </div>
                              <div className="space-y-2">
                                   <Label htmlFor="company">Empresa</Label>
                                   <Input id="company" placeholder="Digite o nome da sua empresa" />
                              </div>
                              <div className="space-y-2">
                                   <Label htmlFor="message">Mensagem</Label>
                                   <Textarea className="min-h-[120px]" id="message" placeholder="Digite sua Mensagem" />
                              </div>
                              <Button className="w-full" type="submit">
                                   Submit
                              </Button>
                         </form>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 space-y-6">
                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">Entre em Contato</h2>
                         <div className="space-y-4">
                              <div className="flex items-start gap-4">
                                   <MapPinIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                   <div>
                                        <p className="font-medium text-gray-900 dark:text-gray-50">Cubo</p>
                                        <p className="text-gray-600 dark:text-gray-400">123 Main St, Anytown USA 12345</p>
                                   </div>
                              </div>
                              <div className="flex items-start gap-4">
                                   <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                   <div>
                                        <p className="font-medium text-gray-900 dark:text-gray-50">Telefone</p>
                                        <p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                                   </div>
                              </div>
                              <div className="flex items-start gap-4">
                                   <GlobeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                   <div>
                                        <p className="font-medium text-gray-900 dark:text-gray-50">Social</p>
                                        <div className="flex items-center gap-4">
                                             <Link
                                                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                                                  href="#"
                                             >
                                                  <TwitterIcon className="h-6 w-6" />
                                             </Link>
                                             <Link
                                                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                                                  href="#"
                                             >
                                                  <LinkedinIcon className="h-6 w-6" />
                                             </Link>
                                             <Link
                                                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                                                  href="#"
                                             >
                                                  <FacebookIcon className="h-6 w-6" />
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>
     );
}

function FacebookIcon(props) {
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
               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
     );
}


function GlobeIcon(props) {
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
               <circle cx="12" cy="12" r="10" />
               <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
               <path d="M2 12h20" />
          </svg>
     );
}


function LinkedinIcon(props) {
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
               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
               <rect width="4" height="12" x="2" y="9" />
               <circle cx="4" cy="4" r="2" />
          </svg>
     );
}


function MapPinIcon(props) {
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
               <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
               <circle cx="12" cy="10" r="3" />
          </svg>
     );
}


function PhoneIcon(props) {
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
               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
     );
}


function TwitterIcon(props) {
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
               <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
     );
}