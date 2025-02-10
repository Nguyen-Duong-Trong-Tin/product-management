import IAccount from "../../interfaces/account.interface";
import AccountModel from "../../models/account.model";

const findById = async (id: string) => {
  const accountExists = await AccountModel.findOne({
    _id: id,
    deleted: false
  });
  return accountExists;
}

const create = async (account: Partial<IAccount>) => {
  const newAccount = new AccountModel(account);
  await newAccount.save();
  return newAccount;
}

const accountService = {
  findById,
  create
};
export default accountService;