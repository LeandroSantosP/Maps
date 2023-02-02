import { LinkWarper } from "components/LinkWarper";
import { placeProps } from "pages/places/[slug]";
import { useEffect, useState } from "react";
import { markerDownFormat } from "utils/markerDownFormat";
import { X } from "phosphor-react";
import * as C from "./styles";
import Image from "next/image";
import { NextSeo } from "next-seo";

type PlaceTempleteProps = {
  place: placeProps;
};

export const PlaceTemplate = ({ place }: PlaceTempleteProps) => {
  const { name, description, gallery } = place;
  const [content, setContent] = useState(description);

  useEffect(() => {
    async function formatData(content: string) {
      const { contentHTML } = await markerDownFormat(content);
      if (contentHTML) setContent(contentHTML);
      else setContent("Some Wrong Happing!");
      return;
    }
    formatData(description);
  }, [description]);

  return (
    <C.Wrapper>
      <NextSeo title={`MyTrips - ${name}`} />
      <LinkWarper href="/">
        <X size={32} />
      </LinkWarper>
      <C.Title>{name}</C.Title>
      {content && <C.Content dangerouslySetInnerHTML={{ __html: content }} />}
      <C.GalleryOfPictures>
        {gallery.map((picture) => (
          <Image
            key={picture.alt}
            blurDataURL="https://image-component.nextjs.gallery/placeholder"
            alt={picture?.alt || "Imagem de uma uma cidade"}
            height={picture.height}
            width={picture.width}
            src={picture.url}
            quality={100}
            loading={"eager"}
          />
        ))}
      </C.GalleryOfPictures>
    </C.Wrapper>
  );
};
