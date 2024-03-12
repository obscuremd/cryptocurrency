import Layout from "./Layout";

const Converter = () => {
  return (
    <Layout title="Converter">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body p-3">
                <form>
                  <div className="form-group">
                    <label htmlFor="from">From:</label>
                    <select className="form-control">
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="DOGE">DOGE</option>
                      <option value="ABC">ABC</option>
                    </select>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="amount">Amount:</label>
                    <input
                      type="number"
                      placeholder="1"
                      id="amount"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="to">To:</label>
                    <select className="form-control">
                      <option value="ABC">ABC</option>
                      <option value="ETH">ETH</option>
                      <option value="DOGE">DOGE</option>
                      <option value="BTC">BTC</option>
                    </select>
                  </div>
                  <div className="form-group mt-4">
                    <input
                      className="btn btn-success"
                      type="submit"
                      value="Convert"
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

export default Converter;
