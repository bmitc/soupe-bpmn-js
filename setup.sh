#!/bin/bash

###
# Setup script to be executed in a bpmn.io project root (some empty folder chosen by YOU)
###

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd $DIR

cd ..

base=`pwd`

echo cloning repositories

cd $base
git clone git@github.com:bmitc/bpmn-js.git
cd $base/bpmn-js
git checkout soupe-bpmn

cd $base
git clone git@github.com:bmitc/bpmn-js-properties-panel.git
cd $base/bpmn-js-properties-panel
git checkout soupe-bpmn

echo done.


echo setup bpmn-js

cd $base/bpmn-js
npm install
npm link


echo setup bpmn-js-properties-panel

cd $base/bpmn-js-properties-panel
npm install
npm link bpmn-js
npm link


echo setup soupe-bpmn-js

cd $base/soupe-bpmn-js
npm install
npm link bpmn-js
npm link bpmn-js-properties-panel
npm link


cd $base

echo all done.
