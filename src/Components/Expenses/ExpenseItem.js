import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    //const [title, setTitle] = useState(props.title);
    //console.log('ExpenseItem evaluated by react');

    // const ClickHandler =() => {
    //     setTitle('updaeted!');
    //     console.log(title);
    // }
    // const expenseDate = new Date (2021,2,28);
    // const expenseTitle = 'Car Insure';
    // const expenseAmount = 294.67;
    //  const month = props.date.toLocaleString('en-Us' , { month: 'long'});
    //  const day = props.date.toLocaleString('en-Us',{ day: '2-digit'});
    //  const year = props.date.getFullYear();
    
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> $ {props.amount} </div>
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem;