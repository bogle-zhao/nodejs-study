const Redis = require('ioredis');

const redis_key_prefix = 'myRedis:info:user:';

class UserRedisDao {
    getRedisConnection() {
        return new Redis({
            host: 'localhost',
            port: 6379
        });
    }

    // async: 表示方法是异步执行的
    async storeUserId(userSessionId, userId) {
        const redis = this.getRedisConnection();
        redis.set(redis_key_prefix + userSessionId, userId, 'ex', 1800, (error, result) => {
            redis.quit();// 连接关闭
        });
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId) {
        const redis = this.getRedisConnection();
        return redis.get(redis_key_prefix + userSessionId, (error, userId) => {
            redis.quit();
            return userId;
        });
    }

    async resetUserSessionExpirationTime(userSessionId) {
        const redis = this.getRedisConnection();
        redis.expire(redis_key_prefix + userSessionId, 1800, (error, result) => {
            redis.quit();
        });
    }

    async removeUserSessionByUserSessionId(userSessionId) {
        const redis = this.getRedisConnection();
        redis.del(redis_key_prefix + userSessionId, (error, result) => {
            redis.quit();
        });
    }
}

module.exports = new UserRedisDao();

