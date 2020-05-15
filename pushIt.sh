#!/usr/bin/env bash




git add .

read -p "Commit message: " mess

git commit -m "$mess"


git push -u origin master