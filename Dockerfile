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

WORKDIR /usr/src

COPY Gemfile Gemfile.lock /usr/src/


RUN gem install bundler && bundle install && yarn install --check-files

COPY . /usr/src

EXPOSE 80
CMD ["bash", "docker-init.sh", "80"]
