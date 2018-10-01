FROM ruby:2.4.2

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list



RUN apt-get update -qq \
	&& apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    nodejs \
    yarn \
    wget

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /usr/src

COPY Gemfile Gemfile.lock /usr/src/


RUN gem install bundler && bundle install && yarn install --check-files

COPY . /usr/src

EXPOSE 80 
CMD ["bash", "docker-init.sh", "80"]
# CMD ["bundle", "exec", "rails", "s", "-p", "2001"]
