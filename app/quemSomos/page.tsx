
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import Link from "next/link";

export default function QuemSomosPage() {
     return (
          <main>
               <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                              <div className="flex flex-col justify-center space-y-4">
                                   <div className="space-y-2">
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                                             SaaS para anúncios automatizados
                                        </div>
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                             Criação de anúncios sem esforço
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                             Nossa plataforma SaaS simplifica a criação de anúncios, permitindo que você gere anúncios de alto desempenho com apenas alguns cliques.
                                        </p>
                                   </div>
                                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                             href="#"
                                        >
                                             Começe Agora
                                        </Link>
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                             href="#"
                                        >
                                             Aprenda Mais
                                        </Link>
                                   </div>
                              </div>
                              <Image
                                   alt="Hero"
                                   className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                                   height="550"
                                   src="/placeholder.svg"
                                   width="550"
                              />
                         </div>
                    </div>
               </section>
               <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                         <div className="flex flex-col items-center justify-center space-y-4 text-center">
                              <div className="space-y-2">
                                   <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                                        Conheça o Time
                                   </div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Os Fundadores</h2>
                                   <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Nossa equipe fundadora traz uma vasta experiência em marketing digital e tecnologia de publicidade.
                                   </p>
                              </div>
                         </div>
                         <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                              <div className="flex flex-col items-center justify-center space-y-4">
                                   <Avatar>
                                        <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                   </Avatar>
                                   <div className="space-y-1 text-center">
                                        <h3 className="text-xl font-bold">Jane Doe</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Cofundador e CEO</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                             Jane tem mais de 10 anos de experiência em marketing digital e publicidade. Ela é apaixonada por
                                             usar a tecnologia para tornar a criação de anúncios mais acessível para empresas de todos os tamanhos.</p>
                                   </div>
                              </div>
                              <div className="flex flex-col items-center justify-center space-y-4">
                                   <Avatar>
                                        <AvatarImage alt="John Smith" src="/placeholder-avatar.jpg" />
                                        <AvatarFallback>JS</AvatarFallback>
                                   </Avatar>
                                   <div className="space-y-1 text-center">
                                        <h3 className="text-xl font-bold">John Smith</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Co-Founder & CTO</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                             John é um engenheiro de software experiente com profundo conhecimento de tecnologia de publicidade. Ele lidera o desenvolvimento de nossa plataforma, garantindo que ela ofereça uma experiência de criação de anúncios perfeita e eficiente.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                              <div className="space-y-2">
                                   <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                                        Nossa Missão
                                   </div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Capacitando empresas com criação de anúncios sem esforço
                                   </h2>
                                   <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Nossa missão é revolucionar a forma como as empresas criam e gerenciam suas campanhas publicitárias. Acreditamos que a criação de anúncios deve ser um processo contínuo e eficiente, permitindo que nossos clientes se concentrem no crescimento de seus negócios.
                                   </p>

                              </div>
                              <Image
                                   alt="Image"
                                   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                   height="310"
                                   src="/placeholder.svg"
                                   width="550"
                              />
                         </div>
                    </div>
               </section>
          </main>
     );
}