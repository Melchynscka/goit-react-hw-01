
import css from "./TransactionHistory.module.css"
const tableHeaders = ['type', 'amount', 'currency'];
export default function TransactionHistory({transactions}) {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    {tableHeaders.map(el => (
            <th key={el} className={css.th}>
              {el}
            </th>
          ))}
                </tr>
            </thead>
            <tbody>
                {transactions.map(el => (
                    <tr key={el.id} className={css.tr}>
                        <td className={css.td}>{el.type}</td>
                        <td className={css.td}>{el.amount}</td>
                        <td className={css.td}>{el.currency}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}