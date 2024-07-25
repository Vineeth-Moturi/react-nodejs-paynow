import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { useUser } from "../../../../Helpers/UserHelper";

function AccountMenu(){
  const {user, updateUser} = useUser();

  return(
    <IconButton>
      <Avatar sx={{height: 28, width: 28}}
        >
        {user.userName[0]}
      </Avatar>
    </IconButton>
  );
}
export default AccountMenu;