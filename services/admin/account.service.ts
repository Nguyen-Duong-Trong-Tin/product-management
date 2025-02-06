import IAccount from "../../interfaces/account.interface";
import AccountModel from "../../models/account.model";

const create = async (account: Partial<IAccount>) => {
  const newAccount = new AccountModel(account);
  await newAccount.save();
  return newAccount;
}

const accountService = {
  create
};
export default accountService;