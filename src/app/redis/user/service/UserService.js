const userRedisDao = require('../db/redis/UserRedisDao');

class UserService {
    async storeUserId(userSessionId, userId) {
        // await： 同步等待返回结果
        await userRedisDao.storeUserId(userSessionId, userId);
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId) {
        await userRedisDao.getUserIdFromUserSessionByUserSessionId(userSessionId);
    }

    async resetUserSessionExpirationTime(userSessionId) {
        await userRedisDao.resetUserSessionExpirationTime(userSessionId);
    }

    async removeUserSessionByUserSessionId(userSessionId) {
        await userRedisDao.removeUserSessionByUserSessionId(userSessionId);
    }
}

module.exports = new UserService();

