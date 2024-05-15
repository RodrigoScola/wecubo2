import Image from 'next/image';
import Link from "next/link";
export default function Products() {
     return (
          <main className="flex-1">
               <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                              <div className="flex flex-col justify-center space-y-4">
                                   <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                             Cubo: a plataforma SaaS definitiva para publicidade sem esforço
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                             Cubo capacita empresas de todos os tamanhos a criar e gerenciar campanhas publicitárias altamente eficazes, impulsionar
                                             exposição da marca e gerar anúncios de banner de nível empresarial com facilidade.
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
                                             className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                             href="#"
                                        >
                                             Aprenda Mais
                                        </Link>
                                   </div>
                              </div>
                              <Image
                                   alt="Cubo"
                                   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                   height="550"
                                   src="/placeholder.svg"
                                   width="550"
                              />
                         </div>
                    </div>
               </section>
               <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                              <div className="flex flex-col justify-center space-y-4">
                                   <div className="space-y-2">
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                             Anúncios de Produtos
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                             Mostre seus produtos com anúncios direcionados
                                        </h2>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

                                             As poderosas ferramentas de criação de anúncios do Cubo permitem que você crie e lance facilmente anúncios direcionados para seus produtos, alcançando o público certo no momento certo.
                                        </p>
                                   </div>
                                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                             href="#"
                                        >
                                             Create Product Ads
                                        </Link>
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                             href="#"
                                        >
                                             Learn More
                                        </Link>
                                   </div>
                              </div>
                              <Image
                                   alt="Product Ads"
                                   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                   height="310"
                                   src="/placeholder.svg"
                                   width="550"
                              />
                         </div>
                    </div>
               </section>
               <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
                              <Image
                                   alt="Brand Exposure"
                                   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                   height="310"
                                   src="/placeholder.svg"
                                   width="550"
                              />
                              <div className="flex flex-col justify-center space-y-4">
                                   <div className="space-y-2">
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                             Exposição da marca
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                             Amplifique o alcance da sua marca</h2>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                             As campanhas de exposição da marca Cubo ajudam você a aumentar a visibilidade, construir o reconhecimento da marca e conectar-se com seu público-alvo por meio de uma variedade de formatos e canais de anúncios.
                                        </p>
                                   </div>
                                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                             href="#"
                                        >
                                             Create Brand Ads
                                        </Link>
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                             href="#"
                                        >
                                             Learn More
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                         <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                              <div className="flex flex-col justify-center space-y-4">
                                   <div className="space-y-2">
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                             Anúncios empresariais
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                             Cative seu público com banners de nível empresarial
                                        </h2>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                             As ferramentas de anúncios em banner de nível empresarial da Cubo permitem que você crie anúncios visualmente impressionantes e de alto impacto que chamam a atenção do seu público-alvo e geram conversões em grande escala.
                                        </p>
                                   </div>
                                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                             href="#"
                                        >
                                             Crie Anúncios empresariais
                                        </Link>
                                        <Link
                                             className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
                                             href="#"
                                        >
                                             Aprenda Mais
                                        </Link>
                                   </div>
                              </div>
                              <Image
                                   alt="Enterprise Ads"
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