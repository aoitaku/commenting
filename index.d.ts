declare module 'commenting' {
  interface Style {
    body: string
    start: string
    end: string
  }
  interface Commenting {
    (text: string | string[], options: {
      style: Style
    } | {
      extension: string
    }): string
    Style: {
      new (body: string, start?: string, end?: string): Style
    }
    styles: { [key: string]: Style }
    extention: { [key: string]: Style }
  }
  const commenting: Commenting
  export = commenting
}
