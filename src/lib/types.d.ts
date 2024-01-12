
declare global {
  namespace JSX {
    interface IntrinsicElements {
      chatRight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}


export type ResponseData = {
  code: number;
  status: number;
  message: string;
  data: any;
}
