import {useMenu} from "@/src/store/menu";
import {Menu ,Close} from "@mui/icons-material";

const MenuButton = () => {
  const { open,openMenu,closeMenu} = useMenu();
  return (
    <div className="lg:hidden">
      {open ? (
        <Close fontSize="large" className="hover:border" onClick={closeMenu} />
      ) : (
        <Menu fontSize="large" className="hover:border" onClick={openMenu} />
      )}
    </div>
  );
};

export default MenuButton;