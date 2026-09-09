import Link from 'next/link';
import { Star, TrendingDown, TrendingUp } from 'lucide-react';
import WatchlistButton from '@/components/WatchlistButton';
import { getWatchlistWithData } from '@/lib/actions/watchlist.actions';

export default async function WatchlistPage() {
  const watchlist = await getWatchlistWithData();

  return (
    <section className="space-y-8">
      <div>
        <h1 className="watchlist-title">Your Watchlist</h1>
        <p className="mt-2 text-gray-500">Follow the stocks you care about in one place.</p>
      </div>

      {watchlist.length === 0 ? (
        <div className="watchlist-empty-container">
          <Star className="watchlist-star" />
          <h2 className="empty-title">Your watchlist is empty</h2>
          <p className="empty-description">
            Search for a stock and add it to start tracking its latest price.
          </p>
          <Link href="/" className="yellow-btn flex items-center px-6">Find stocks</Link>
        </div>
      ) : (
        <div className="watchlist-container">
          <div className="watchlist">
            <div className="watchlist-table">
              <table className="w-full text-left">
                <thead>
                  <tr className="table-header-row">
                    <th className="table-header px-4 py-3">Company</th>
                    <th className="table-header px-4 py-3">Price</th>
                    <th className="table-header px-4 py-3">Change</th>
                    <th className="table-header px-4 py-3">Market cap</th>
                    <th className="table-header px-4 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {watchlist.map((stock) => {
                    const isPositive = (stock.changePercent ?? 0) >= 0;
                    return (
                      <tr key={stock.symbol} className="table-row">
                        <td className="table-cell px-4 py-4">
                          <Link href={`/stocks/${stock.symbol}`} className="block">
                            <span className="font-semibold text-gray-100">{stock.symbol}</span>
                            <span className="block text-sm text-gray-500">{stock.company}</span>
                          </Link>
                        </td>
                        <td className="table-cell px-4 py-4">{stock.priceFormatted ?? 'N/A'}</td>
                        <td className={`table-cell px-4 py-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                          <span className="inline-flex items-center gap-1">
                            {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                            {stock.changeFormatted ?? 'N/A'}
                          </span>
                        </td>
                        <td className="table-cell px-4 py-4">{stock.marketCap ?? 'N/A'}</td>
                        <td className="px-4 py-4">
                          <WatchlistButton
                            symbol={stock.symbol}
                            company={stock.company}
                            isInWatchlist
                            showTrashIcon
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
