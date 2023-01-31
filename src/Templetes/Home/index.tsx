import { LinkWarper } from "components/LinkWarper";
import { Place } from "components/Map";
import dynamic from "next/dynamic";
import { Info } from "phosphor-react";
import * as C from "./styles";

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
        <LinkWarper href="/about">
          <Info size={30} aria-label="About" />
        </LinkWarper>
        <Map places={places} />
      </>
    </C.Wrapper>
  );
}
