// consts/tools.ts

export interface Tool {
  title: string;
  path: string;
}

export const tools: Tool[] = [
  {
    path: "/tools/jsonFormatter",
    title: "JSON Formatter",
  },
  {
    path: "/tools/linesRemover",
    title: "Lines Remover",
  },
  {
    path: "/tools/soqlGeneratorByIds",
    title: "SOQL Generator by IDs",
  }
];
