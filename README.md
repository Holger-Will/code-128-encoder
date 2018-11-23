## code-128-encoder

an optimizing code-128 encoder for node.js, the commandline, and your browser.

[live example](examples/html/encoder.html)

**this is not a renderer!**

this is a specialized encoder, which you can use to write your own renderer see the [examples](#examples)

## install the command line interface

    npm install -g code-128-encoder

## install node module

    npm install --save code-128-encoder

## install for browser usage

    bower install code-128-encoder

## Examples

### use the cli

    encode128 yourText

outputs the encoded version of your input as an ascii string: `ÑyourText,Ó`

    encode128 -o bars yourText

outputs the encoded version of your input as a series of 0s and 1s where 1 represents a bar and 0 represents a space:  `110100100001001101110010001111010101100100001100011101011`

    encode128 -o weights yourText

outputs the encoded version of your input as a series of weights. each number corespons to a width alternating between bars and spaces: `2112141221321341111122142331112`

to see more options use:

    encode128 -h

you can pipe data from other commands using `encode128 -`.

    echo "Test" | encode128 -o weights -

### use in your Browser

after installing the encoder with bower you can use it like this:

    <script src="bower_components/code-128-encoder/code-128-encoder.min.js"></script>
    <script>
        var encoder = new Code128Generator()
        console.log(encoder.encode(text))
    </script>

you can use the varoius options to write your own renderer. For your convenience, the bower package comes with a code 128 font which you can use to display the code.

    <style>
      @font-face { font-family: 'code128'; src: url('bower_components/code-128-encoder/fonts/code128_XL.ttf'); }
      .barcode { font-family: code128; font-size:50px; margin-top:10px}
    </style>
    <script>
        var encoder = new Code128Generator()
        document.querySelector(".barcode").innerHTML=encoder.encode(text)
    </script>

###  use in your node.js app

    var Encoder = require("code-128-encoder")
    var encoder= new Encoder()
    console.log(encoder.encode("Test"))

prints: `ÑTestWÓ`

you can pass an options parameter to specify the output.

    encoder.encode("Text",{output:"ascii",mapping:0})

the output parameter can be one of:

| name | example | description |
| --- | --- | --- |
| ascii | ÑTestWÓ | the ascii characters of the encoded string |
| bars | 11010010000110111000101011001... | a 1 represents a bar a 0 represents a space |
| weights | 2112142133111122141142121241123113212331112 | each number represents a width alternating between bars and spaces |
| codes | [ 104, 52, 69, 83, 84, 55, 106 ] | an array of code numbers as per the code 128 spec |
| array | [ 209, 84, 101, 115, 116, 87, 211 ] | the ascii code points of the encoded string |

the mapping parameter changes the ascci character mapping and can be one of:

| name | description |
| --- | --- |
| 0 | most common mapping (compatible with google fonts) |
| 1 | barcodesoft mapping|
| 2 | mapping used by my old fonds (as due to a wrong/uncommom mapping in wikipedia) |


### Examples Folder

you can use this to write your own renderer.
in the examples Folder, there are a few example renderer.

the html folder holds examples for rendering barcodes client side in the browser using a base128 font, canvas or just divs. for the html examples to work, go to the examples/html folder, and do `bower install`

in the cli folder there is a ->svg->inkscape->png renderer, a plaintext renderer which renders the barcode using ascii art, and a latext rederer.
