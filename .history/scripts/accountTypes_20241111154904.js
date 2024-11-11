const accountCards = [
  {
    name: "Razor Sharp",
    type: "Standard Account",
    platform: "MT4 & MT5",
    markets: "All instruments",
    minDeposit: "USD 10",
    bonus: "Yes",
    leverage: "Up to 1:500",
    miniTradeSize: "1.3 pips",
    commission: "No commission",
    swapFees: "No",
    marginCall: "50%",
    stopOut: "30%",
    accountBaseCurrencies: ["ZAR", "USD", "GBP", "EUR"],
    orderExecution: "Market Execution",
    buttonText: "Sign Up"
  },
  {
    name: "Razor Blade",
    type: "VIP Account",
    platform: "MT4 & MT5",
    markets: "All instruments",
    minDeposit: "USD 10",
    bonus: "Yes",
    leverage: "Up to 1:500",
    miniTradeSize: "1.3 pips",
    commission: "No commission",
    swapFees: "No",
    marginCall: "50%",
    stopOut: "30%",
    accountBaseCurrencies: ["ZAR", "USD", "GBP", "EUR"],
    orderExecution: "Market Execution",
    buttonText: "Sign Up"
  },
  {
    name: "Razor Edge",
    type: "Micro Account",
    platform: "MT4 & MT5",
    markets: "All instruments",
    minDeposit: "USD 10",
    bonus: "Yes",
    leverage: "Up to 1:500",
    miniTradeSize: "1.3 pips",
    commission: "No commission",
    swapFees: "No",
    marginCall: "50%",
    stopOut: "30%",
    accountBaseCurrencies: ["ZAR", "USD", "GBP", "EUR"],
    orderExecution: "Market Execution",
    buttonText: "Sign Up"
  }
];

const container = document.getElementById("accountCardsContainer");

accountCards.forEach(card => {
  const cardHTML = `
    <div class="card-bg">
      <div class="feature-card">
        <div class="feature-card-header" >
          <img src="/assets/svg/bulb.svg" alt="feature-card-header" />
          <div class="headers">
            <h2>${card.name}</h2>
            <h3>${card.type}</h3>
          </div>
        </div>
        <p><strong>Platform:</strong> ${card.platform}</p>
        <p><strong>Markets:</strong> ${card.markets}</p>
        <p><strong>Min. Deposit:</strong> ${card.minDeposit}</p>
        <p><strong>Bonus:</strong> ${card.bonus}</p>
        <p><strong>Leverage:</strong> ${card.leverage}</p>
        <p><strong>Mini. Trade Size:</strong> ${card.miniTradeSize}</p>
        <p><strong>Commission:</strong> ${card.commission}</p>
        <p><strong>Swap Fees:</strong> ${card.swapFees}</p>
        <p><strong>Margin Call:</strong> ${card.marginCall}</p>
        <p><strong>Stop Out:</strong> ${card.stopOut}</p>
        <p><strong>Account Base Currencies:</strong> ${card.accountBaseCurrencies.join(", ")}</p>
        <p><strong>Order Execution:</strong> ${card.orderExecution}</p>
        <a href="#signup"> <button class="button is-info signup">${card.buttonText}</button></a>
      </div>
    </div>
  `;
  container.innerHTML += cardHTML;
});