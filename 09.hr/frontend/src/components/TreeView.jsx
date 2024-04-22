import React from "react";
import { useSelector } from "react-redux";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ListItemButton from "@mui/material/ListItemButton";
import { sideBarIcons } from "../statics/data/SideBarIcons";
import "../css/TreeView.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const randomKey = ()=>{
    return Math.floor(Math.random()*999999999999999);
}

function TreeView({open}) {
  const { menuList } = useSelector((store) => store.menu);

  const navigate = useNavigate();

  return (
    <SimpleTreeView className="simple-tree-view">
      {menuList &&
        menuList.map((menu, index) => {
          const parentMenu = menu.parentMenu;
          if (parentMenu.menuType == "MENU") {
            return (
              <ListItemButton onClick={()=> navigate(parentMenu.menuLink)} key={parentMenu.id} className="list-item-button">
                <div>
                  {sideBarIcons.map((sideBarIcon) => {
                    if (parentMenu.icon == sideBarIcon.name) {
                      return sideBarIcon.icon;
                    }
                  })}
                </div>
                <TreeItem
                  className="MuiTreeItem-label"
                  key={parentMenu.id}
                  itemId={parentMenu.id}
                  style={{opacity: open ? 1 : 0}}
                  label={parentMenu.menuText}
                />
              </ListItemButton>
            );
          }
           else if (parentMenu.menuType == "FOLDER") {
            return (
              <ListItemButton key={parentMenu.id} className="list-item-button">
                <TreeItem
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                  className="MuiTreeItem-iconContainer"
                  key={parentMenu.id}
                  itemId={parentMenu.id}
                  label={
                    <Typography sx={{marginLeft:'20px' , fontSize:'12px' , opacity : open ? 1 : 0}}  key={parentMenu.id} variant="body2">
                          {parentMenu.menuText}
                        </Typography>
                  }
                >
                  {menu.children.map((child) => (
                    <TreeItem
                      onClick={()=> navigate(child.menuLink)}
                      key={child.id}
                      itemId={child.id}
                      label={
                        open && ( 
                        <Typography  key={child.id} variant="h5" sx={{fontSize:'12px' , fontFamily:'arial'}}>
                          {sideBarIcons.map((sideBarIcon) => {
                            if (child.icon == sideBarIcon.name) {
                              return sideBarIcon.icon;
                            }
                          })}
                          {child.menuText}
                        </Typography>
                        )
                      }
                    />
                  ))}
                  
                </TreeItem>
              </ListItemButton>
            );
          }
        })}
    </SimpleTreeView>
  );
}

export default TreeView;
