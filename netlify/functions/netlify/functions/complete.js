const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { paymentId } = JSON.parse(event.body);

  await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
    method: "POST",
    headers: {
      Authorization: `Key ${process.env.PI_API_KEY}`
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "completed" })
  };
};
