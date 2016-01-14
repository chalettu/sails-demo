module.exports.connections = {
    someMongodbServer: {
        adapter: 'sails-mongo',
        host: '192.168.99.100',
        port: 32768,
        user: 'dbUser',
        password: '12345678',
        database: 'sampledb'
    },
    redisDB:{
        adapter:'sails-redis',
        port: 32769,
        host: '192.168.99.100',
        password: null,
        database: null,
        options: {

            // low-level configuration
            // (redis driver options)
            parser: 'hiredis',
            return_buffers: false,
            detect_buffers: false,
            socket_nodelay: true,
            no_ready_check: false,
            enable_offline_queue: true
        }
    }
}
