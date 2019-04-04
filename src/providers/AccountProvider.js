import React from "react";


const AccountContext = React.createContext();


export const AccountConsumer = AccountContext.Consumer;


class AccountProvider extends React.Component {
  state = {
    username: "Fooman77",
    dateJoined: "04/04/2019",
    membershipLevel: "Silver",
    updateAccount: (account) => this.updateAccount(account),
  };
    
  updateAccount = (account) => {
    this.setState({ ...account, });
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;