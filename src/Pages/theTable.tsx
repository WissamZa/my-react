import { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";
import { EyeIcon } from "../assets/EyeIcon";
import { columns, users as initialUsers } from "../Data/data";

type UserType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  team: string;
  status: keyof typeof statusColorMap;
};

type StatusType = "active" | "paused" | "vacation";

const statusColorMap: Record<StatusType, "success" | "danger" | "warning"> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function TheTable() {
  const [users, setUsers] = useState<UserType[]>(initialUsers);

  // Function to delete a user
  const deleteUser = (userId: string) => {
    setUsers((prevState: UserType[]) => prevState.filter((user) => user.id !== userId));
  };

  return (
    <main>
    <Table className="w-[50svw]" aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(user: UserType) => (
          <TableRow key={user.id}>
            {columns.map((column) => {
              const columnKey = column.uid;
              const cellValue = user[columnKey as keyof UserType];

              if (columnKey === "name") {
                return (
                  <TableCell key={columnKey}>
                    <User avatarProps={{ radius: "lg", src: user.avatar }} description={user.email} name={cellValue as string}>
                      {user.email}
                    </User>
                  </TableCell>
                );
              } else if (columnKey === "role") {
                return (
                  <TableCell key={columnKey}>
                    <div className="flex flex-col">
                      <p className="text-bold text-sm capitalize">{cellValue as string}</p>
                      <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                    </div>
                  </TableCell>
                );
              } else if (columnKey === "status") {
                return (
                  <TableCell key={columnKey}>
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                      {user.status}
                    </Chip>
                  </TableCell>
                );
              } else if (columnKey === "actions") {
                return (
                  <TableCell key={columnKey}>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Details">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EyeIcon />
                        </span>
                      </Tooltip>
                      <Tooltip content="Edit user">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete user">
                        <span onClick={() => deleteUser(user.id)} className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                );
              }

              // Default case for rendering other cell values
              return <TableCell key={columnKey}>{cellValue as string}</TableCell>;
            })}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </main>
  );
}
