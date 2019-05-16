#!/bin/bash

clear
echo "Welcome to the ULTIMATE UPDATER PROGRAM"
echo "If I may ask, what's your name?"
read name
echo "It's a pleasure meeting you $name."

if [ "$1" == "-y" ] || [ "$1" == "-Y" ]
then 
  sudo apt update -y
  sudo apt upgrade -y
  sudo apt autoclean -y
  sudo apt autoremove -y
else
  echo "Would like to update? Type Y for yes or anything else for no"
  read question1
   if [ "$question1" == "Y" ] || [ "$question1" == "y" ] || [ "$question1" == "yes" ] || [ "$question1" == "YES" ]
   then
     sudo apt update
   fi
  echo "Would like to upgrade? Type Y for yes or anything else for no"
  read question1
   if [ "$question1" == "Y" ] || [ "$question1" == "y" ] || [ "$question1" == "yes" ] || [ "$question1" == "YES" ]
   then
     sudo apt upgrade
   fi
  echo "Would like autoclean? Type Y for yes or anything else for no"
  read question1
   if [ "$question1" == "Y" ] || [ "$question1" == "y" ] || [ "$question1" == "yes" ] || [ "$question1" == "YES" ]
   then
     sudo apt autoclean
   fi
  echo "Would like autoremove? Type Y for yes or anything else for no"
  read question1
   if [ "$question1" == "Y" ] || [ "$question1" == "y" ] || [ "$question1" == "yes" ] || [ "$question1" == "YES" ]
   then
     sudo apt autoremove
   fi
fi

