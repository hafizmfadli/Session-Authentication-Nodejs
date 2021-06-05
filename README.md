# Web Authentication (Session Based) using Node JS, Express JS, PostgreSQL, and Redis

This repo is to store source code for web authentication tutorial on my YouTube channel.
Check this link if you interested to follow along : [Lets go to my YouTube Channel](https://www.youtube.com/channel/UCHLrAzxt8nzQrxgK2-llq3Q)

## Basic Configuration

### .env variable
create .env file in your root project directory.
```
# database
PGUSER=your_postgres_username
PGHOST=your_postgres_host
PGPASSWORD=your_postgres_secret
PGDATABASE=your_postgres_database_name
PGPORT=your_postgres_port

# session storage
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port

# session secret
SESSION_SECRET=your_session_secret
```
### Run redis server
```
$ redis-server
[28550] 01 Aug 19:29:28 # Warning: no config file specified, using the default config. In order to specify a config file use 'redis-server /path/to/redis.conf'
[28550] 01 Aug 19:29:28 * Server started, Redis version 2.2.12
[28550] 01 Aug 19:29:28 * The server is now ready to accept connections on port 6379
... more logs ...
```

### install nodemon globally on your machine

`npm install -g nodemon`

### install all dependencies

`npm install`

### run the application

`nodemon index`
