function validatePaymentInputs(paymentOptions) {
  const cardNumberRegex = /^\d{16}$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^\d{3}$/;
  const upiRegex = /^[\w.-]+@[\w.-]+$/;
  const ifscRegex = /^[A-Za-z]{4}\d{7}$/;

  return (
    cardNumberRegex.test(paymentOptions.debitCardNumber) &&
    expiryRegex.test(paymentOptions.debitCardExpiry) &&
    cvvRegex.test(paymentOptions.debitCardCVV) &&
    cardNumberRegex.test(paymentOptions.creditCardNumber) &&
    expiryRegex.test(paymentOptions.creditCardExpiry) &&
    cvvRegex.test(paymentOptions.creditCardCVV) &&
    upiRegex.test(paymentOptions.upiID) &&
    ifscRegex.test(paymentOptions.accountIFSC)
  );
}

function savePaymentOptions() {
  const paymentOptions = {
    debitCardNumber: document.getElementById("debitcardnumber").value,
    debitCardExpiry: document.getElementById("expirydate_debit").value,
    debitCardCVV: document.getElementById("cvv_debit").value,
    creditCardNumber: document.getElementById("creditcardnumber").value,
    creditCardExpiry: document.getElementById("expirydate_credit").value,
    creditCardCVV: document.getElementById("cvv_credit").value,
    upiID: document.getElementById("upiid").value,
    accountName: document.getElementById("accountname").value,
    accountNumber: document.getElementById("accountnumber").value,
    accountIFSC: document.getElementById("accountifsccode").value,
  };

  if (!validatePaymentInputs(paymentOptions)) {
    alert("Please enter valid payment details.");
    return;
  }

  localStorage.setItem("paymentOptions", JSON.stringify(paymentOptions));
  alert("Payment Options Saved successfully!");

  document.getElementById("payment-form").reset();
}

window.onload = function () {
  const savedOptions = JSON.parse(localStorage.getItem("paymentOptions"));
  if (savedOptions) {
    document.getElementById("debitcardnumber").value =
      savedOptions.debitCardNumber;
    document.getElementById("expirydate_debit").value =
      savedOptions.debitCardExpiry;
    document.getElementById("cvv_debit").value = savedOptions.debitCardCVV;
    document.getElementById("creditcardnumber").value =
      savedOptions.creditCardNumber;
    document.getElementById("expirydate_credit").value =
      savedOptions.creditCardExpiry;
    document.getElementById("cvv_credit").value = savedOptions.creditCardCVV;
    document.getElementById("upiid").value = savedOptions.upiID;
    document.getElementById("accountname").value = savedOptions.accountName;
    document.getElementById("accountnumber").value = savedOptions.accountNumber;
    document.getElementById("accountifsccode").value = savedOptions.accountIFSC;
  }
};
