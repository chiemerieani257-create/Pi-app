Pi.init({ version: "2.0" });

function pay() {
  Pi.createPayment({
    amount: 1,
    memo: "Test payment",
    metadata: { bot: "pi-netlify" }
  }, {
    onReadyForServerApproval: function(paymentId) {
      fetch("/.netlify/functions/approve", {
        method: "POST",
        body: JSON.stringify({ paymentId })
      });
    },
    onReadyForServerCompletion: function(paymentId) {
      fetch("/.netlify/functions/complete", {
        method: "POST",
        body: JSON.stringify({ paymentId })
      });
    }
  });
}
