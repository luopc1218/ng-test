export const updateHistoryUsersIds = (userId) => {
  return new Promise((resovlve, reject) => {
    const historyUsersIds: string[] =
      JSON.parse(localStorage.getItem('history_users_id')) || [];
    //  如果历史记录没有这个userId,则添加到首位,否则提到首位
    const index = historyUsersIds.indexOf(userId);
    if (index >= 0) {
      historyUsersIds.splice(index, 1);
    }
    historyUsersIds.unshift(userId);
    //  如果储存的userId大于10个 则只保留10个
    if (historyUsersIds.length > 10) {
      historyUsersIds.splice(10, historyUsersIds.length - 10);
    }
    localStorage.setItem('history_users_id', JSON.stringify(historyUsersIds));
    resovlve();
  });
};
