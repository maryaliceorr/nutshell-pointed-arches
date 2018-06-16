const {startFriends,} = require('./friends/friendMain.js');
const {startArticles,} = require('./articles/article-main.js');
const {exposeTask,} = require('./tasks/taskMain.js');
const {getAllArticlesEvent,} = require('./articles/article-events.js');
const {refreshFriends,} = require('./friends/friendEvents.js');

function initializer () {
  startArticles();
  startFriends();
  exposeTask();
  getAllArticlesEvent();
  refreshFriends();
}

module.exports = {
  initializer,
};