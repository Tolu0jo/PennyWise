
import { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import {
  PageContainer,
  Header,
  ExpensesContainer,
  GoBack,
  SelectYear,
  Ex,
  ExpenseTable,
  Red,
  Vw,
  TableRow
} from './ExpenseSummaryStyle';
import { Link } from 'react-router-dom';




const ExpenseSummary = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [currentDate, setCurrentDate] = useState('');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);
  

  return (
    <PageContainer>
      <Header>
        <h3>Expenses</h3>
        <p>{currentDate}</p>
      </Header>
      <ExpensesContainer>
        <div>
        <GoBack>
          <Link to="/expensePage" className='link'>
          <FiArrowLeft />
          Go Back
          </Link>
        </GoBack>

        </div>
        <div>
          <SelectYear value={selectedYear} onChange={handleYearChange}>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
          </SelectYear>
          <Ex>Expense Summary</Ex>
        </div>
      </ExpensesContainer>
      <ExpenseTable>
        <thead>
          <tr>
            
            <th>Month</th>
            <th>Opening Balance</th>
            <th>Planned Payments</th>
            <th>Daily Payments</th>
            <th>Total Expenditure</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <TableRow>
            <td>January</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>February</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>March</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>April</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>May</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>Jnne</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>July</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>
              <Link to="/expensePage" className='link'>view</Link>
            </Vw>
          </TableRow>
          <TableRow>
            <td>August</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>view</Vw>
          </TableRow>
          <TableRow>
            <td>September</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>view</Vw>
          </TableRow>
          <TableRow>
            <td>October</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>view</Vw>
          </TableRow>
          <TableRow>
            <td>November</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>view</Vw>
          </TableRow>
          <TableRow>
            <td>December</td>
            <td># 2,768,859.98</td>
            <td>-# 1,350,000.00</td>
            <td>-# 1,092,567.62</td>
            <Red>-# 2,448,443.48</Red>
            <Vw>view</Vw>
          </TableRow>
        </tbody>
      </ExpenseTable>
    </PageContainer>
  );
};

export default ExpenseSummary;
