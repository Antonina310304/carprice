export interface ILoaderParams {
    src: string;
    width: number;
    height?: number;
    quality?: number;
  }

const imgLoader = ({
  src, width, height, quality,
}: ILoaderParams): string => `${src}?w=${width}&h=${height}&q=${quality || 75}`;

export default imgLoader;
