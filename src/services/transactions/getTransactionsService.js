import axios from "axios";
const getTransactions = async (transaction) => {

  const url = 'http://localhost:3921/api/v1/transferencias';

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    return {message: "Transactions, not found!"};
  }
}

export default getTransactions;
