import './index.css'

const BasicDetails = props => {
    const {selectedCustomer} = props
    return (<div className="basic-details">
        <p>Account Holder :{selectedCustomer.Account_holder_name}</p>
        <p>Account Number :{selectedCustomer.Account_number}</p>
        <p>Account Balance :{selectedCustomer.Remaining_balance}</p>
    </div>)

}

export default BasicDetails

