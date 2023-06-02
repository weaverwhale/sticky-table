export const columns = [
  {
    key: "week",
    name: "Week",
    dataType: "text",
    sortable: false,
  },
  {
    key: "orders",
    name: "Orders",
    dataType: "number",
    sortable: false,
  },
  {
    key: "roas",
    name: "Return on Ad Spend",
    dataType: "number",
    sortable: false,
  },
  {
    key: "cpa",
    name: "Cost Per Aquisition",
    dataType: "currency",
    sortable: false,
  },
  {
    key: "net_profit",
    name: "Net Profit",
    dataType: "currency",
    sortable: false,
  },
];

const dataSize = 52;
export const data = Array(dataSize)
  .fill(0)
  .map((_, i) => {
    const orders = Math.floor(Math.random() * 100);
    const roas = (Math.random() * 10).toFixed(2);
    const cpa = (orders / roas).toFixed(2);

    const profit = (orders * roas).toFixed(2);
    const cost = (profit - cpa * orders).toFixed(2);
    const net_profit = (profit - cost).toFixed(2);

    return {
      key: `week-${i + 1}`,
      week: `Week ${i + 1}`,
      orders,
      roas,
      cpa,
      net_profit,
    };
  });
