import React, { useState } from 'react';
import './information.css';

const Information = () => {
  const [isMutualFundsOpen, setIsMutualFundsOpen] = useState(true);
  const [isStocksOpen, setIsStocksOpen] = useState(false);
  const [isInvestmentStrategiesOpen, setIsInvestmentStrategiesOpen] = useState(false);
  const [ismutualFundsWorkOpen, setIsmutualFundsWorkOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 'mutualFunds':
        setIsMutualFundsOpen(!isMutualFundsOpen);
        break;
      case 'stocks':
        setIsStocksOpen(!isStocksOpen);
        break;
      case 'investmentStrategies':
        setIsInvestmentStrategiesOpen(!isInvestmentStrategiesOpen);
        break;
        case 'mutualFundsWork':
          setIsmutualFundsWorkOpen(!ismutualFundsWorkOpen);
          break;
      default:
        break;
    }
  };

  const getArrow = (isOpen) => isOpen ? '↓' : '→';

  return (
    <div className="information-container">
      <div className="content-section">

        <h1>Questions/Answers</h1>

        <h2 onClick={() => toggleSection('mutualFunds')}>
          {getArrow(isMutualFundsOpen)} What are Mutual Funds?
        </h2>
        {isMutualFundsOpen && (
          <div className="dropdown-content">
            <p>
              A mutual fund is an investment vehicle that pools money from many investors to purchase securities. 
              These funds are managed by professional money managers, who allocate the fund's investments 
              in an attempt to produce capital gains or income for the fund's investors. Mutual funds provide 
              diversification and professional management, making them a popular choice for many investors.
            </p>
            <p>
              There are several types of mutual funds, including:
            </p>
            <ul>
              <li><b>Equity Funds:</b> These invest primarily in stocks and are known for higher potential returns and higher risk.</li>
              <li><b>Bond Funds:</b> These invest in bonds and other debt instruments, offering lower risk and lower returns compared to equity funds.</li>
              <li><b>Money Market Funds:</b> These invest in short-term, high-quality investments issued by government and corporate entities, and are considered low risk.</li>
              <li><b>Hybrid Funds:</b> These invest in a mix of equities, bonds, and other securities, providing a balance of risk and return.</li>
              <li><b>Index Funds:</b> These track a specific market index, such as the Nifty 50, and aim to replicate its performance.</li>
              <li><b>Sector Funds:</b> These invest in specific sectors of the economy, such as technology or healthcare, and can be more volatile.</li>
            </ul>
            <p>
              Investing in mutual funds offers benefits such as professional management, diversification, affordability, and liquidity. However, it's important to be aware of potential drawbacks, including fees, taxes, and the risk of losing money.
            </p>
          </div>
        )}

<h2 onClick={() => toggleSection('mutualFundsWork')}>
          {getArrow(ismutualFundsWorkOpen)} How do Mutual Funds Work?
        </h2>
        {ismutualFundsWorkOpen && (
          <div className="dropdown-content">
            <p>
            Investors buy shares in a mutual fund, which represent a portion of the funds holdings. The fund manager uses the pooled money to buy a diversified portfolio of assets. The performance of the mutual fund is measured by the change in the fund’s net asset value (NAV), which is the total value of the fund’s assets minus its liabilities.
            </p>
          </div>
        )}




        <h2 onClick={() => toggleSection('stocks')}>
          {getArrow(isStocksOpen)} What are Stocks?
        </h2>
        {isStocksOpen && (
          <div className="dropdown-content">
            <p>
              A stock represents a share in the ownership of a company and constitutes a claim on part of the 
              company's assets and earnings. There are two main types of stock: common and preferred. 
              Common stock usually entitles the owner to vote at shareholders' meetings and to receive dividends. 
              Preferred stock generally does not have voting rights, but has a higher claim on assets and earnings 
              than the common shares.
            </p>
            <p>
              There are several important concepts to understand when investing in stocks:
            </p>
            <ul>
              <li><b>Market Capitalization:</b> This refers to the total market value of a company's outstanding shares of stock. It's calculated by multiplying the current stock price by the total number of outstanding shares.</li>
              <li><b>Dividends:</b> These are payments made by a corporation to its shareholders, usually as a distribution of profits.</li>
              <li><b>Price-Earnings (P/E) Ratio:</b> This is a valuation ratio of a company's current share price compared to its per-share earnings. A high P/E ratio may indicate that a stock is overvalued, or that investors are expecting high growth rates in the future.</li>
              <li><b>Volatility:</b> This refers to the degree of variation of a trading price series over time. Higher volatility means higher risk.</li>
              <li><b>Bull and Bear Markets:</b> A bull market is characterized by rising stock prices, while a bear market is characterized by falling stock prices.</li>
              <li><b>Initial Public Offering (IPO):</b> This is the process by which a private company becomes publicly traded by offering its shares to the public for the first time.</li>
            </ul>
            <p>
              Investing in stocks offers the potential for high returns, but also comes with higher risk compared to other investment options. It's important to conduct thorough research and consider your risk tolerance before investing in stocks.
            </p>
          </div>
        )}


        <h2 onClick={() => toggleSection('investmentStrategies')}>
          {getArrow(isInvestmentStrategiesOpen)} Various kinds of Investment Strategies
        </h2>
        {isInvestmentStrategiesOpen && (
          <div className="dropdown-content">
            <p>
              There are various strategies investors can use to build their portfolios:
            </p>
            <ul>
              <li><b>Value Investing:</b> This strategy involves picking stocks that appear to be undervalued based on fundamental analysis.</li>
              <li><b>Growth Investing:</b> This strategy focuses on investing in companies that are expected to grow at an above-average rate compared to other companies.</li>
              <li><b>Income Investing:</b> This strategy involves investing in securities that pay dividends or interest, providing a steady income stream.</li>
              <li><b>Dollar-Cost Averaging:</b> This strategy involves investing a fixed amount of money at regular intervals, regardless of the stock price, to reduce the impact of volatility.</li>
              <li><b>Indexing:</b> This strategy involves investing in index funds that aim to replicate the performance of a specific index, such as the S&P 500.</li>
            </ul>
            <p>
              Each strategy has its own advantages and disadvantages, and the best approach depends on individual financial goals, risk tolerance, and investment horizon.
            </p>
          </div>
        )}

        <p>read more...</p>

      </div>
    </div>
  );
};

export default Information;
