# Easy Setup
> Setup Poptato easily using docker-compose

## What is this?
This repository is using git submodules & docker-compose to construct a running demo of the entire solution.  
All you got to do is run 3 simple commands and you're good to go!  
We even bundeled mock data to save you time :smiley:

## Running
First, make sure you have [Docker](http://docker.com) installed and running.
Then, open a terminal in a target folder and run:
```shell
$ git clone --recrsive https://github.com/Poptato/easy-setup.git Poptato
$ cd Poptato
$ docker-compose up --build
```
To check everything is working, run the integration tests by:
```shell
$ npm run test:integration
```
