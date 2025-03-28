# Instructions to view locally (linux)
## Prerequisites
* Ruby and Utils: 
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```
* Setup environment:
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
* Install jekyll and bundler
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
sudo gem install bundler
```
## Adding library
In the library folder type:
```
npm i
npm run build
```
> Note the build script now copies the library over to the source folder, but it is excluded from git, so you have to do this step after any new checkout.

## Running locally
To run locally go to the source directory and type: ```./runLocal.sh```
Press ```ctrl-c``` to exit
> Note this script will use the ```_config.dev.yml``` config file, then reset the config to ```_config.prod.yml``` so that things will work when publishing to pages.