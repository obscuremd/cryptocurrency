import Layout from "./Layout";
import { API_KEY, API_URL } from "../../index";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [amountInBtc, setAmountInBtc] = useState(1);
  const [amountInFiat, setAmountInFiat] = useState(0);
  const [fiat, setFiat] = useState("USD");

  const calculateBTC = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${API_URL}?access_key=${API_KEY}&target=${fiat}&symbols=BTC`
      );
      setAmountInFiat(amountInBtc * data.rates.BTC.toFixed(0));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Layout title="Crypto Converter">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body p-3">
                <form onSubmit={calculateBTC}>
                  <div className="form-group">
                    <label htmlFor="btc">BTC:</label>
                    <input
                      type="number"
                      placeholder="1"
                      id="btc"
                      className="form-control"
                      value={amountInBtc}
                      onChange={(e) => setAmountInBtc(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="amount">Amount:</label>
                    <input
                      type="number"
                      placeholder="10000"
                      id="amount"
                      className="form-control"
                      value={amountInFiat}
                      readOnly
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="fiat">Fiat</label>
                    <select
                      id="fiat"
                      className="form-control"
                      value={fiat}
                      onChange={(e) => setFiat(e.target.value)}
                    >
                      <option value="USD">USD</option>
                      <option value="NGN">NGN</option>
                      <option value="GMD">GMD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div className="form-group mt-4">
                    <input
                      className="btn btn-success"
                      type="submit"
                      value="Calculate"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
