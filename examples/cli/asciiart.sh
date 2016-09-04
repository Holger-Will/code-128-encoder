#!/bin/bash
clear
enc=$(../../encode128 -o bars $1)
enc2=${enc//1/█}
enc3=${enc2//0/\\x20}
echo
echo
for i in `seq 1 20`;
  do
    echo -e '          '$enc3
  done
echo
size0=${#1}
size1=$((${#enc}+20))
margin=$(($size1 - $size0))
margin=$(($margin / 2))
for i in `seq 1 $margin`;
  do
    echo -ne " "
  done
echo $1
echo
echo
