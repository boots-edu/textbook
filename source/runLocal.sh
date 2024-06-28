#!/bin/bash
cp _Gemfile Gemfile
bundle install
bundle exec  jekyll serve
rm Gemfile Gemfile.lock
