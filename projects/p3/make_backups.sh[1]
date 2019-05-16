#!/bin/bash

function directory_exists {
	if [ -d $1 ]; then
		echo -e "\e[42mDirectory exists\e[0m"
		return 0
		else
			echo -e "\e[42mDirectory does not exist, do you want to create it?\e[0m"
			read yesno
			if [ "${yesno,,}" == "yes" ] || [ "${yesno,,}" == "y" ] || [ "${yesno,,}" == "yess" ] || [ "${yesno,,}" == "ye" ]; then
				mkdir -p $1
				return 0
				else
					return 1
			fi
	fi
}

clear
echo -e "\e[91mMaking a tar backup of a directory, press [enter] key to continue\e[0m"
read -p " "
echo " "

dayName=$(date +%A)
dayDate=$(date +%d)
month=$(date +%B)
year=$(date +%Y)

echo -e "\e[36mDay: $dayName"
echo -e "Date: $dayDate"
echo -e "Month: $month"
echo -e "Year: $year\e[0m"

echo " "

# Calendar
cal

echo "Do you want CPU data?"
read cpudata
if [ "${cpudata,,}" == "yes" ] || [ "${cpudata,,}" == "y" ] || [ "${cpudata,,}" == "yess" ] || [ "${cpudata,,}" == "ye" ]; then

	# Hostname information
	echo -e "\e[42m**** Hostname Information ****\e[0m"
	hostnamectl
	echo ""

	# Filesystem disk space usage
	echo -e "\e[42m**** Filesystem disk space usage ****\e[0m"
	df -h
	echo ""

	# Memory -- free and used
	echo -e "\e[42m**** Memory -- free and used ****\e[0m"
	free -h
	echo ""

	# System Uptime and Performance Load
	echo -e "\e[42m**** System Uptime and Performance Load ****\e[0m"
	uptime
	echo ""

	# Users currently logged in
	echo -e "\e[42m**** Users currently logged in ****\e[0m"
	who
	echo ""

	# Top 5 Processes
	echo -e "\e[42m**** Top 5 Processes ****\e[0m"
	ps -eo %mem,%cpu,comm --sort=-%mem | head -n 6
	echo ""
	echo -e "\e[91mPress [enter] key to continue\e[0m"
	read -p " "

fi



echo " "
# folder / dest = destination src = source (don't use 'source' since that is a keyword)
stop=0
cd
ls -hl
while [ $stop -eq 0 ]; do
	echo "Input directory to backup (Usually /home/compsci/bash/Projects)"
	read src
	directory_exists $src
	if [ $? -eq 0 ]; then
		let stop=1
	fi
done


stop2=0
cd
ls -hl
while [ $stop2 -eq 0 ]; do
	echo "Input directory to place your backup (Usually /home/compsci/backups)"
	read dest
	directory_exists $dest
	if [ $? -eq 0 ]; then
		let stop2=1
	fi
done

echo -e "\e[42mWhat name is your backup?\e[0m"
read name

echo -e "\e[91mPress any key to start backup\e[0m"
read -p "" -n1 -s
mkdir -p $dest/"$dayName $dayDate $month $year"
echo " "

echo -e "\e[42mBackup started...\e[0m"
tar cvfz $dest/"$dayName $dayDate $month $year"/$name.tgz $src 2>> ../logErrors.txt
echo " "
echo -e "\e[42mHere are the contents of your backup directory\e[0m"
cd $dest
ls -ahl
echo " "
echo -e "\e[42mHere is what is inside today's directory\e[0m"
cd "$dayName $dayDate $month $year"
ls -ahl
echo

echo -e "\e[92mAll done, press [enter] to exit\e[0m"
read -p ""
cd ~
clear
