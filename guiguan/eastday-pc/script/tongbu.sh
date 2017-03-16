#!/bin/bash

/usr/bin/rsync -avH --progress '-e ssh -p 59522' /data/app/ 10.10.179.140:/data/app/