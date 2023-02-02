import { LinkWarper } from "components/LinkWarper";
import { Place } from "components/Map";
import dynamic from "next/dynamic";
import { Info } from "phosphor-react";
import * as C from "./styles";
import { NextSeo } from "next-seo";

interface HomeTemplateProps {
  places?: Place[];
}

export default function HomeTemplate({ places }: HomeTemplateProps) {
  const Map = dynamic(() => import("components/Map").then((module) => module.Map), {
    ssr: false
  });

  return (
    <C.Wrapper>
      <>
        <NextSeo
          title="My-Trips"
          description="A simple project to show in a map the places that i went and show more information's and photos when clicked"
          canonical="https://mytrips.leandrosantos.com.br"
        />
        <LinkWarper href="/about">
          <Info size={30} aria-label="About" />
        </LinkWarper>
        <Map places={places} />
      </>
    </C.Wrapper>
  );
}
