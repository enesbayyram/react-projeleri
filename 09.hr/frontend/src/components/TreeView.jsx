import React from "react";
import { useSelector  , useDispatch} from "react-redux";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ListItemButton from "@mui/material/ListItemButton";
import { sideBarIcons } from "../statics/data/SideBarIcons";
import "../css/TreeView.css";
import { Typography , Button } from "@mui/material";
import { useNavigate} from "react-router-dom";

function TreeView({ open }) {
  const { menuList } = useSelector((store) => store.menu);
  const navigate = useNavigate();

  const createMenu = (menu) => {
    return (
      <div key={menu.id} style={{width:'100%' , padding:'0px 7px'}}>
     <Button key={menu.id}  sx={{textTransform:'none'}} onClick={()=> navigate(menu.menuLink)}>
        <div>
          {sideBarIcons.map((sideBarIcon) => {
            if (menu.icon == sideBarIcon.name) {
              return sideBarIcon.icon;
            }
          })}
        </div>
        <TreeItem
          className="MuiTreeItem-label"
          key={menu.id}
          itemId={menu.id}
          style={{ opacity: open ? 1 : 0 }}
          label={menu.menuText}
        />
      </Button>

      </div>
    );
  };

  const createFolderMenu = (parentMenu) => {
    return (
      <div key={parentMenu.id} style={{width:'100%' , padding:'0px 7px'}}>
      <TreeItem
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft:'8px'
        }}
        className="MuiTreeItem-iconContainer"
        key={parentMenu.id}
        itemId={parentMenu.id}
        label={
          <Typography
            sx={{
              marginLeft: "20px",
              fontSize: "12px",
              opacity: open ? 1 : 0,
            }}
            key={parentMenu.id}
            variant="body2"
          >
            {parentMenu.menuText}
          </Typography>
        }
      >
        {parentMenu.children &&
          parentMenu.children.map((child, index) => {
            if (child.children && child.children == 0) {
              return (
                createMenu(child)
              );
            } else {
              return createFolderMenu(child);
            }
          })}
      </TreeItem>
      </div>
    );
  };

  const buildTreeMenu = () => {
    return (
      menuList &&
      menuList.map((menu) => {
        if (menu.menuType == "MENU") {

          return createMenu(menu);
        } else if (menu.menuType == "FOLDER") {
          {
            return createFolderMenu(menu);
          }
        }
      })
    );
  };

  return (
    <SimpleTreeView className="simple-tree-view">
      {buildTreeMenu()}
    </SimpleTreeView>
  );
}

export default TreeView;
