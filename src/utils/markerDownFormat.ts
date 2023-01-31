import html from "remark-html";
import { remark } from "remark";

export async function markerDownFormat(content: string) {
  const processedContent = await remark().use(html).process(content);
  const contentHTML = processedContent.toString();

  return {
    contentHTML
  };
}
