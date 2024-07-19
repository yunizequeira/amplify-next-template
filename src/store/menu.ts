import { create } from "zustand";


type MenuType={
    open:boolean;
    openMenu:()=>void;
    closeMenu:()=>void
}



export const useMenu = create<MenuType>((set) => ({
    open:false,
    openMenu:()=>{
        set(()=>({
           open:true
        }))
    },
    closeMenu:()=>{
        set(()=>({
           open:false
        }))
    }


}))


