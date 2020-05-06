"use strict";

module.exports.bye = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "goodbye",
    }),
  };

  return response;
};
