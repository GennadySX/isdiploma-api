#!/usr/bin/env bash




git add .

read -p "Commit message: " mess

git commit -m "cfs :%mess"


git push -u origin master