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
    key: "sales",
    name: "Sales",
    dataType: "currency",
    sortable: false,
  },
  {
    key: "unit_cost",
    name: "Unit Cost",
    dataType: "currency",
    sortable: false,
  },
  {
    key: "ad_spend",
    name: "Ad Spend",
    dataType: "currency",
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

export const sortOrder = [
  "week",
  "orders",
  "sales",
  "cost",
  "unit_cost",
  "ad_spend",
  "roas",
  "cpa",
  "net_profit",
];

const dataSize = 52;
const unitCost = 5; // assume every widget costs $5 to make
const unitPrice = 10; // assume every widget is sold $10
export const data = Array(dataSize)
  .fill(0)
  .map((_, i) => {
    const orders = Math.floor(Math.random() * 100) || 0;
    const sales = orders * unitPrice;
    const ad_spend = orders * Math.random();
    const unit_cost = orders * unitCost;

    const cost = (ad_spend + unit_cost).toFixed(2);
    const roas = ((sales - ad_spend) / orders).toFixed(2);
    const cpa = (cost / orders).toFixed(2);

    const net_profit = (sales - cost).toFixed(2);

    return {
      key: `week-${i + 1}`,
      week: `Week ${i + 1}`,
      orders,
      sales: sales.toFixed(2),
      ad_spend: ad_spend.toFixed(2),
      unit_cost,
      roas,
      cpa,
      cost,
      net_profit,
    };
  });
