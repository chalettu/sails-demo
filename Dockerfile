FROM    centos:centos7

# Install Node.js and npm
RUN     curl -O https://nodejs.org/dist/v5.4.0/node-v5.4.0-linux-x64.tar.gz
RUN     tar --strip-components 1 -xzvf node-v* -C /usr/local

RUN     yum install -y gcc gcc-c++ openssl-devel make
RUN     yum update -y
RUN     npm install sails pm2 -g

# Install app dependencies
COPY package.json /web_app/package.json
RUN cd /web_app; npm install

# Bundle app source
COPY . /web_app

EXPOSE  4000
CMD cd /web_app; pm2 start app.js -x -- --prod