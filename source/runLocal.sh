#!/bin/bash
cp _Gemfile Gemfile
cp _config.dev.yml _config.yml
bundle install
bundle exec  jekyll serve
rm Gemfile Gemfile.lock
cp _config.prod.yml _config.yml
