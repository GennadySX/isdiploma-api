#!/usr/bin/env bash
#@Created by GennadySX

d=`date +"%d-%m"`
h=`date +"%H"`


read -p " commit -stamp: " stamp

read -p " enter commit message: " mess


git add .

git commit -m "isdiploma-api --$d -$stamp  :$mess"


git push -u origin master