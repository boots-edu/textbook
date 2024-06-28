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
```
## Adding library
In the library folder type:
```
npm i
npm run build
```
> Note the build script now copies the library over to the source folder, but it is excluded from git, so you have to do this step after any new checkout.
## Modify config.yml
Add:
```
theme: just-the-docs
```
> Remove it again before publishing
## Running locally
To run locally go to the source directory and type: ```./runLocal.sh```
Press ```ctrl-c``` to exit