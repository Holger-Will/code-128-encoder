#!/bin/bash
v2==$(encode128 $1)
echo "name|encoded|desc" > data.csv
echo $1'|'$v2'|'$2 >> data.csv

xelatex latex/base.tex
rm data.csv
rm base.aux
rm base.log

evince base.pdf
