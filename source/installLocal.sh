#!/bin/bash
sudo apt-get install ruby-full
sudo apt-get install zlib1g-dev
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
# Probably don't need this with ruby-full, but just in case
sudo apt-get install ruby2.5 ruby2.5-dev build-essential dh-autoreconf
sudo gem update
sudo gem install bundler
# Not sure about this next line
sudo bundle config path vendor/bundle
sudo bundle install --gemfile=_Gemfile
# Should output the version of Jekyll (e.g., `jekyll 4.4.0`)