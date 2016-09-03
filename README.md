## node128

a simple Code 128 encoder for node.js.


When you pass a string to its encode function, it adds the start and stop codes to the string and calculates the checksum.
It is supposed to work with a [code 128 font](https://github.com/Holger-Will/code128)  

    var encoder= new Encoder()
    console.log(encoder.encode("Test"))

prints: `ÑTestWÓ`

* Ñ is the Start Code B (ascii 209)
* Ó is the Stop Code (ascii 211)
* W is the Checksum (ascii 87)

print this string with a Code 128 Font.
