#!/bin/bash

# For this example to work you need the
# code128_XL.ttf font (https://cdn.rawgit.com/Holger-Will/code128/master/fonts/code128_XL.ttf)
# installed on your system, as well as inkscape.

enc=$(encode128 $1)
echo $enc
echo '<svg xmlns="http://www.w3.org/2000/svg" width="7cm" height="3cm">' > $1.svg
echo '  <rect x="0" y="0" width="7cm" height="4cm" fill="beige"/>' >> $1.svg
echo '$1  <text x="3.5cm" y="2cm" font-size="1.8cm" text-anchor="middle" font-family="code128_XL">'$enc'</text>' >> $1.svg
echo '  <text x="3.5cm" y="2.5cm" font-size="0.5cm" text-anchor="middle">'$1'</text>' >> $1.svg
echo '</svg>' >> $1.svg

inkscape -e $1.png $1.svg

rm $1.svg
eog $1.png
