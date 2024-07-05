import { GenerateAdsSection } from '../components/component/gen';

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import { SVGProps } from 'react';



export default function Lp() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crie anúncios impressionantes com Cubo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Cube transforma seus produtos em anúncios lindos e de alta conversão com apenas alguns cliques.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#pricing"


                >
                  Começe agora
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="/contato"
                >
                  Aprenda Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Características principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <CloudIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Baseado em nuvem</h3>
                <p className="text-gray-500 dark:text-gray-400">Acesse o Cubo de qualquer lugar, a qualquer hora.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FastForwardIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Rápido e Eficiente</h3>
                <p className="text-gray-500 dark:text-gray-400">Crie anúncios em minutos, não em horas.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PuzzleIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fácil de Usar</h3>
                <p className="text-gray-500 dark:text-gray-400">Sem habilidades de design? Sem problemas.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Exemplos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Image
                alt="Example ad"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="300"
                src="/images/cubo.png"
                width="300"
              />
              <Image
                alt="Example ad"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="300"
                src="/images/image.png"
                width="300"
              />
              <Image
                alt="Example ad"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="300"
                src="/images/work"
                width="300"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                </Avatar>
                <h3 className="text-lg font-semibold mt-4 mb-2">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  &quot;Cubo revolucionou nosso processo de criação de anúncios. É rápido, fácil e os resultados são impressionantes.&quot;
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                </Avatar>
                <h3 className="text-lg font-semibold mt-4 mb-2">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400">&quot;Não posso acreditar quanto tempo estamos economizando com o Cubo. É uma virada de jogo.&quot;</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                </Avatar>
                <h3 className="text-lg font-semibold mt-4 mb-2">Bob Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">&quot;Nossos anúncios nunca estiveram melhores. Obrigado, Cubo!&quot;</p>
              </div>
            </div>
          </div>
        </section>
        <section id='pricing' className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Preço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Perfeito para pequenas empresas que estão apenas começando.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <span className="text-4xl font-semibold">$29/mo</span>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>Até 100 Anúnicios</li>
                    <li>Analíticas Básicas</li>
                    <li>Suporte por Email</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Escolher Plano</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pró</CardTitle>
                  <CardDescription>Ótimo para empresas em crescimento com maiores necessidades de anúncios.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <span className="text-4xl font-semibold">$59/mo</span>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>Até 100 Anúnicios</li>
                    <li>Analíticas Avançadas</li>
                    <li>Prioridade no Suporte por Email</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Escolher Plano</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empreendimento</CardTitle>
                  <CardDescription>Ótimo para empresas em crescimento com maiores necessidades de anúncios.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <span className="text-4xl font-semibold">$99/mo</span>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>Anúncios Ilimitados</li>
                    <li>Analíticas Premium</li>
                    <li>Suporte Profissional 24/7</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Escolher Plano</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <GenerateAdsSection />
      </main>

    </div>
  );
}

function CloudIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}




function FastForwardIcon(props: SVGProps<SVGSVGElement>) {
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
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}


function PuzzleIcon(props: SVGProps<SVGSVGElement>) {

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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

