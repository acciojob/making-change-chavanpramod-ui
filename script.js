const makeChange = (c) => {
  let amount = parseInt(c, 10);

  const q = Math.floor(amount / 25);
  amount = amount % 25;

  const d = Math.floor(amount / 10);
  amount = amount % 10;

  const n = Math.floor(amount / 5);
  amount = amount % 5;

  const p = amount;

  return { q, d, n, p };
};


const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));