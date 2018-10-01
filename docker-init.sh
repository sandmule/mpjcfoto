#!/bin/bash

PORT=$1

if [ -z "${PORT}" ]; then
  echo "Please enter a port number"
  exit 1
fi

if [ -f /usr/src/tmp/pids/server.pid ]; then
  rm /usr/src/tmp/pids/server.pid
fi

# bundle exec rake db:migrate 2>/dev/null

app_directory='/usr/src'

# if [ -d "${app_directory}" ]; then
#   cd "${app_directory}"
#   if [ "$RAILS_ENV" == "production" ]; then
#     ./bin/webpack
#     bundle exec rails assets:precompile
#   fi
#   if [ "$RAILS_ENV" == "development" ]; then
#     yarn install --check-files &
#   fi
#   bundle exec rails server -p $PORT -b 0.0.0.0
# else
#   echo "Unable to start application"
#   exit 1
# fi
bundle exec rails server -p $PORT -b 0.0.0.0
