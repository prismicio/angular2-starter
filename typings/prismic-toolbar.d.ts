declare module "prismic-toolbar" {
  export function editLink(endpoint: string, documentId: string): string;
  export function editButtons(endpoint: string): void;
  export var editIcon: string;
  export function toolbar(): void;
}
