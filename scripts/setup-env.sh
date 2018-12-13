#!/bin/sh
set -e
echo "---------------------"
echo "Install all modules"
echo "---------------------"
rm -rf plugins/ platforms/ node_modules/
npm install
echo "---------------------"
echo "Add platfrom Android"
echo "---------------------"
ionic cordova platform add android
echo "---------------------"
echo "Add platform iOS"
echo "---------------------"
ionic cordova platform add ios
echo "---------------------"
echo "Execute ionic prepare"
echo "---------------------"
ionic cordova prepare
