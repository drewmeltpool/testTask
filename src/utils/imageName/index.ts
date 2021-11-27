type ImageNameType = (_url: string) => string;

export const imageName: ImageNameType = (url) => url.split('/').pop() || '';
