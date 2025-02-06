import IRole from "../../interfaces/role.interface";
import RoleModel from "../../models/role.model";

const find = async () => {
  const roles = await RoleModel.find({ deleted: false });
  return roles;
}

const findById = async (id: string) => {
  const roleExists = await RoleModel.findOne({
    _id: id,
    deleted: false
  });
  return roleExists;
}

const create = async (role: Partial<IRole>) => {
  const newRole = new RoleModel(role);
  await newRole.save();
  return newRole;
}

const roleService = {
  find,
  findById,
  create
};
export default roleService;