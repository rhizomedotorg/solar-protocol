#!/bin/bash

#argumment 1 is the name of the environmental variable
source /home/pi/solar-protocol/.spenv

printf '%s\n' "${!1}"