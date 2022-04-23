import Mock from "mockjs";

let getMockData = function () {};

//get请求
module.exports = Mock.mock("/user", "get", () => {
  const ret = Mock.mock({
    user: { username: "@cname" },
  });
  return {
    status: 200,
    data: ret,
  };
});
