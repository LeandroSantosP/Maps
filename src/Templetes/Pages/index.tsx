import { LinkWarper } from "components/LinkWarper";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { markerDownFormat } from "utils/markerDownFormat";
import * as C from "./styles";

export type PageTemplateProps = {
  heading: string;
  body: string;
};

export const PageTemplate = ({ body, heading }: PageTemplateProps) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    markerDownFormat(body).then(({ contentHTML }) => {
      if (contentHTML) setHtml(contentHTML);
    });
  }, [body]);

  return (
    <C.Wrapper>
      <LinkWarper href="/">
        <X size={32} />
      </LinkWarper>

      <C.Heading>{heading}</C.Heading>
      <C.Body>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </C.Body>
    </C.Wrapper>
  );
};
