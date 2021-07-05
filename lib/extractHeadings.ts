import remark from "remark";

export const extractHeadings = (md: string) => {
  const processer = remark()
    // @ts-ignore
    .use((opt) => {
      return (ast, file) => {
        // @ts-ignore
        const headings = ast.children.filter(
          ({ type, depth }: { type: string; depth: number }) => type === "heading" && depth === 3
        );
        return headings
          .map(({ children }: any) => {
            const link = children.find(({ type }: { type: string }) => type === "link");
            return link || { children };
          })
          .map(({ children }: any) => {
            return children.find(({ type }: { type: string }) => type === "text");
          })
          .map(({ value }: { value: string }) => value);
      };
    });
  const headings = processer.runSync(processer.parse(md));
  return headings;
};
