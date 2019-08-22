// tslint:disable

declare namespace Code128Generator {
  const enum OutputMode {
    /**
     * ASCII characters of the encoded string
     */
    ASCII = 'ascii',
    /**
     * 1 represents a bar, 0 represents a space
     */
    BARS = 'bars',
    /**
     * Each number represents a width alternating between bars and spaces
     */
    WEIGHTS = 'weights',
    /**
     * An array of code numbers as per the code 128 spec
     */
    CODES = 'codes',
    /**
     * The ascii code points of the encoded string
     */
    ARRAY = 'array',
    /**
     * All values for each character
     */
    ALL = 'all'
  }

  const enum Mapping {
    /**
     * Most common mapping (compatible with google fonts)
     */
    COMMON = 0,
    /**
     * Barcodesoft mapping
     */
    BARCODESOFT = 1,
    /**
     * Mapping used by my old fonds (as due to a wrong/uncommom mapping in wikipedia)
     */
    LEGACY = 2
  }

  interface AllOutputs {
    code: number;
    A: string;
    B: string;
    C: string;
    ascii: number[];
    bars: string;
    weights: string;
    role?: string;
    symbol: string;
  }


  interface Options {
    mapping?: Mapping;
  }

  interface StringOutputOptions extends Options {
    output: OutputMode.ASCII|OutputMode.BARS|OutputMode.WEIGHTS;
  }

  interface ArrayOutputOptions extends Options {
    output: OutputMode.CODES|OutputMode.ARRAY;
  }

  interface AllOutputOptions extends Options {
    output: OutputMode.ALL;
  }
}

declare class Code128Generator {
  constructor();

  encode(text: string): string;

  encode(text: string, opts: Code128Generator.StringOutputOptions): string;

  encode(text: string, opts: Code128Generator.ArrayOutputOptions): number[];

  encode(text: string, opts: Code128Generator.AllOutputOptions): Code128Generator.AllOutputs[];
}

export = Code128Generator;
